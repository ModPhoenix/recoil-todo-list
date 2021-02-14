import { ChangeEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { TodoItemId } from "../../../types";
import { todoItemAtomFamily, todoListIdsState } from "../atoms";

interface Props {
  id: TodoItemId;
}

function TodoListItem({ id }: Props) {
  const setTodoListIds = useSetRecoilState(todoListIdsState);
  const [todoItem, setTodoList] = useRecoilState(todoItemAtomFamily(id));

  const editItemText = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setTodoList((data) => ({
      ...data,
      text: value,
    }));
  };

  const toggleItemCompletion = () => {
    setTodoList((data) => ({
      ...data,
      isComplete: !data.isComplete,
    }));
  };

  const deleteItem = () => {
    setTodoListIds((state) => state.filter((itemId) => itemId !== id));
  };

  return (
    <div>
      <input type="text" value={todoItem.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={todoItem.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default TodoListItem;
