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

  const edit = (id) => {
    const newArr = todoList.map(t => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing }
      } else {
        return t;
      }
    });
    setTodoList(newArr)
  };

  const del = (id) => {
    const newArr = todoList.filter((t) => id !== t.id);
    setTodoList(newArr);
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
              {t.isEditing ? (
                <>
                  <input value={t.todoTitle}></input>
                  <button>저장</button>
                </>
              ) : (
                <>
                  <p>{t.todoTitle}</p>
                  <button
                    onClick={() => {
                      edit(t.id);
                    }}
                  >
                    수정
                  </button>
                  {/* 이게 map함수 안에 있으니까 t.id를 받아올 수 있는건가 */}
                  <button
                    onClick={() => {
                      del(t.id);
                    }}
                  >
                    삭제
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </>
    </>
  );
}
