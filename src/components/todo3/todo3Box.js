import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo3Box() {
  const [newTodo, setNewTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const AddTodoBtn = () => {
    const newTodoObj = { id: uuidv4(), title: newTodo, isEditing: false };
    setNewTodo("");
    setTodoList([newTodoObj, ...todoList]);
    // console.log("newTodo", newTodo)
    //console.log("todoList",todoList)
  };
  const handleInputTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const handleEditTodo = (e, id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, title: e.target.value };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
    //console.log('newArr',newArr,'e.target.value',e.target.value)
  };

  const editBtn = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };

  const delBtn = (id) => {
    const newArr = todoList.filter((t) => id !== t.id);
    setTodoList(newArr);
  };
  const saveBtn = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
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
          <li key={t.id}>
            {t.isEditing ? (
              <>
                <input
                  onChange={(e) => {
                    handleEditTodo(e, t.id);
                  }}
                  value={t.title}
                ></input>
                <button
                  onClick={() => {
                    saveBtn(t.id);
                  }}
                >
                  저장
                </button>
              </>
            ) : (
              <>
                <p>{t.title}</p>
                <button
                  onClick={() => {
                    editBtn(t.id);
                  }}
                >
                  수정
                </button>
                <button
                  onClick={() => {
                    delBtn(t.id);
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
  );
}
