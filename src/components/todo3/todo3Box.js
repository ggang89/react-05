import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo3Box() {
  const [newTodo, setNewTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const AddTodoBtn = () => {
    const newTodoObj = { id: uuidv4(), title: newTodo, isEditing: false };
    setNewTodo("");
    setTodoList([newTodoObj, ...todoList]);
  };
  const handleInputTodo = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <>
      <>
        <label htmlFor="addTodo">ADD </label>
        <input
          value={newTodo}
          onChange={handleInputTodo}
          type="text"
          id="addTodo"
        ></input>
        <button onClick={AddTodoBtn}>+Add List</button>
      </>

      <ul>
        {todoList.map((t) => (
          <li>
            {t.isEditing ? (
              <>
                <input value={t.title}></input>
                <button>저장</button>
              </>
            ) : (
              <>
                <p>{t.title}</p>
                <button>수정</button>
                <button>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
