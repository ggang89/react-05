import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo2Add from "./Todo2Add";
import Todo2List from "./Todo2List";

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
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };

  const del = (id) => {
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

  const handleEditTodo = (e, id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, todoTitle: e.target.value };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };

  return (
    <>
      <Todo2Add
        handleInputTodo={handleInputTodo}
        inputTodo={inputTodo}
        newTodoBtn={newTodoBtn}
      />

      <>
        <ul>
          {todoList.map((t) => (
            <li key={t.id}>
              <Todo2List
                isEditing={t.isEditing}
                todoTitle={t.todoTitle}
                handleEditTodo={(e) => {
                  handleEditTodo(e, t.id);
                }}
                saveBtn={() => {
                  saveBtn(t.id);
                }}
                edit={() => {
                  edit(t.id);
                }}
                del={() => {
                  del(t.id);
                }}
              />
            </li>
          ))}
        </ul>
      </>
    </>
  );
}
