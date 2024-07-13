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
      <div>
        <TodoInputBox
          inputText={inputText}
          addTodo={addTodoBtn}
          handleAddtext2={handleAddtext}
        />
      </div>

      {/* 투두 리스트 */}
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            {t.isEditing ? (
              <>
                <input
                  value={t.todoTitle}
                  onChange={(e) => handleInText(e, t.id)}
                ></input>
                <button
                  onClick={() => {
                    completeBtn(t.id);
                  }}
                >
                  완료
                </button>
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
  );
}
