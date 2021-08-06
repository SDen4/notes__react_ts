export type InitialStateType = {
  notes: NoteType[];
  save: boolean;
};

export type TaskType = {
  taskName: string;
  id: string;
  checked: boolean;
};

export type NoteType = {
  id: string;
  noteTitle: string;
  tasks: TaskType[];
};
