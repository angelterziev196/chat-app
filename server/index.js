import { createServer, get } from "http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import mongoose  from "mongoose";
import { Schema } from './models/chatShema.js';
import { MessageSchema } from './models/chatShema.js';

const PORT = 3000;
const app = express();
app.use(cors())
const httpServer = createServer(app);
const io = new Server(httpServer);

const generateID = () => crypto.randomUUID();
const getAllRooms = () => Schema.find({}, 'id name messages').exec();
const getCurrentRoom = (id) => Schema.find({id: id}).exec();

io.on("connection", async (socket) => {
	console.log(`⚡: ${socket.id} user just connected!`);
	
	socket.on("createRoom", async (name) => {
		socket.join(name);

		const data = new Schema({
			id: generateID(),
			name,
		});

		data.save();

		const getRooms = await getAllRooms();

		socket.emit("roomsList", getRooms);
	});

	socket.on('joinRoom', roomName => {
		socket.join(roomName);
		console.log('joined room', roomName);
	});

	socket.on("findRoom", async (id) => {
		const currentRoom = await getCurrentRoom(id);
		socket.emit("foundRoom", currentRoom[0].messages);
	});

	socket.on("newMessage", async (data) => {
		const { room_id, message, user, time } = data;

		const currentRoom = await getCurrentRoom(room_id);

		if(!currentRoom) {
			console.error('Cannot find any rooms.');
			return false;
		}

		const newMessage = await MessageSchema.create({
			id: generateID(),
			text: message,
			user,
			time
		});
		
		socket.to(currentRoom[0].name).emit("roomMessage", newMessage);

		const hours = newMessage.createdAt.getHours();
		const minutes = newMessage.createdAt.getMinutes();
		newMessage.time = `${hours}:${minutes}`;

		socket.to(currentRoom[0].messages).emit("roomMessage", newMessage);

		currentRoom[0].messages.push(newMessage);
		currentRoom[0].save();

		const getRooms = await Schema.find().exec();
		socket.emit("roomsList", getRooms);
		socket.emit("foundRoom", currentRoom[0].messages);
	});

	socket.on("deleteRoom", async (id) => {
		await Schema.deleteOne({id: id}).exec().then(() => {
			console.log("Room deleted:", id)
		});
	});
	
	socket.on("disconnect", () => {
		socket.disconnect();
		console.log("🔥: A user disconnected");
	});
});

app.get("/rooms", async (req, res) => {
	const aggregate = await Schema.aggregate([
		{$project: {id: 1, name: 1, messages: { $slice: ['$messages', -1] } }},
	]).exec();

	res.json(aggregate);
});

mongoose
	.connect(
		'mongodb+srv://angelterziev195:angelterziev195@angelchat.gxboxwk.mongodb.net/',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	)
	.then(() => console.log('DB connected'))
	.catch(err => console.log('DB connection error: ', err.message));

  httpServer.listen(PORT, () => {
    console.log('server running at http://localhost:4000');
  });