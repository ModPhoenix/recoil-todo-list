import { atom, atomFamily } from "recoil";
import { TodoItem, TodoItemId } from "../../types";

export const todoListIdsState = atom<TodoItemId[]>({
  key: 'todoListIdsState',
  default: [],
});

export const todoItemAtomFamily = atomFamily<TodoItem, TodoItemId>({
  key: `todoItemState`,
  default: (id) => ({
    id,
    text: '',
    isComplete: false,
  }),
});
