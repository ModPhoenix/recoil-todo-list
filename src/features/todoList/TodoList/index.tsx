import React from "react";
import { useRecoilValue } from "recoil";
import TodoListItem from "../TodoListItem";
import TodoItemCreator from "../TodoItemCreator";
import { todoListIdsState } from "../atoms";

function TodoList() {
  const todoIds = useRecoilValue(todoListIdsState);

  return (
    <>
      <TodoItemCreator />

      {todoIds.map((id) => (
        <TodoListItem key={id} id={id} />
      ))}
    </>
  );
}

export default TodoList;
