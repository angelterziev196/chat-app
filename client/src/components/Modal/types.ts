export type SetVisibleType = {setVisible: (value: boolean) => void};

export type CloseModalType = () => void;

export interface ModalTypes {
	handleCreateRoom: () => void;
	setGroupName: (groupName: string) => void;
}
