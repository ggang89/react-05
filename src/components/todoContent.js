import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInputBox from "./TodoInputBox";
import TodoList from "./TodoList";

export default function TodoContents() {
  const [inputText, setInputText] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const addTodoBtn = (e) => {
    const newArr = {
      id: uuidv4(),
      todoTitle: inputText,
      isEditing: false,
    };
    console.log(e);
    setTodoList([newArr, ...todoList]);
    setInputText(" ");
  };
  const handleAddtext = (e) => {
    setInputText(e.target.value);
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
  const completeBtn = (id) => {
    const newArr = todoList.map((t) => {
      if (id === t.id) {
        return { ...t, isEditing: !t.isEditing };
      } else {
        return t;
      }
    });
    setTodoList(newArr);
  };
  const handleInText = (e, id) => {
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
      <TodoInputBox
        inputText={inputText}
        addTodo={addTodoBtn}
        handleAddtext2={handleAddtext}
      />

      <ul>
        {todoList.map((t) => (
          <TodoList
            edit={() => {
              edit(t.id);
            }}
            del={() => {
              del(t.id);
            }}
            completeBtn={() => {
              completeBtn(t.id);
            }}
            handleInText={(e) => handleInText(e, t.id)}
            isEditing={t.isEditing}
            todoTitle={t.todoTitle}
            key={t.id}
          />
        ))}
      </ul>
    </>
  );
}
