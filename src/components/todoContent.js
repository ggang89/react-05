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
          <li key={t.id}>
            {/* map의 key값은 렌더링되는 가장 큰 부모에 연결한다
             만약 div로 자식들을 감샀다면 div에 key연결함.
             <></>에 연결해주려면, <Fragment key={}>로 이름써줘야함 */}

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
            />
          </li>
        ))}
      </ul>
    </>
  );
}
