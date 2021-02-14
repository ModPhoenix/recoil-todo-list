import { ChangeEvent, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoItemAtomFamily, todoListIdsState } from "../atoms";

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");

  const [todoListIds, setTodoListIds] = useRecoilState(todoListIdsState);

  const nextItemId = todoListIds[todoListIds.length - 1] + 1 || 1;

  const setTodoListItem = useSetRecoilState(todoItemAtomFamily(nextItemId));

  const addItem = () => {
    setTodoListIds((list) => [...list, nextItemId]);

    setTodoListItem((data) => ({
      ...data,
      text: inputValue,
      isComplete: false,
    }));

    setInputValue("");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
