import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo2() {
  const [inputTodo, setInputTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
    //console.log(e.target.value)
  };
  const newTodoBtn = () => {
    const newArr = {
      id: uuidv4(),
      todoTitle: inputTodo,
      isEditing: false,
    };
    setInputTodo(" ");
    setTodoList([newArr, ...todoList]);
  };
  return (
    <>
      <label htmlFor="newTodo">New Todo</label>
      <input
        onChange={handleInputTodo}
        value={inputTodo}
        type="text"
        id="newTodo"
      ></input>
      <button onClick={newTodoBtn}>➕Add Todo</button>

      <>
        <ul>
          {todoList.map((t) => (
            <li>
              {t.todoTitle}
              <button>수정</button>
              <button>삭제</button>
            </li>
          ))}
        </ul>
      </>
    </>
  );
}
