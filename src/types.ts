export type TodoItemId = number;

export interface TodoItem {
  id: TodoItemId,
  text: string,
  isComplete: boolean,
}
