import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./todo3Input";
import Todo3List from "./todo3List";

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
      <InputTodo
        newTodo={newTodo}
        handleInputTodo={handleInputTodo}
        AddTodoBtn={AddTodoBtn}
      />

      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <Todo3List
              isEditing={t.isEditing}
              handleEditTodo={(e) => {
                handleEditTodo(e, t.id);
              }}
              title={t.title}
              saveBtn={() => {
                saveBtn(t.id);
              }}
              editBtn={() => {
                editBtn(t.id);
              }}
              delBtn={() => {
                delBtn(t.id);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
