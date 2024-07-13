import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoContents() {
  const [addTodo, setAddTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const addTodoBtn = () => {
    const newArr = {
      id: uuidv4(),
      todoTitle: addTodo,
      isEdting: false,
    };

    setTodoList([newArr, ...todoList]);
    setAddTodo(" ");
  };
  const handleAddtext = (e) => {
    setAddTodo(e.target.value);
  };
  return (
    <>
      <div>
        {/* 새로운 투두 추가창 */}
        <label htmlFor="addTodo">new Todo</label>
        <input
          id="addTodo"
          value={addTodo}
          type="text"
          onChange={handleAddtext}
        ></input>
        <button onClick={addTodoBtn}>추가</button>
      </div>

      {/* 투두 리스트 */}
      <ul></ul>
    </>
  );
}
