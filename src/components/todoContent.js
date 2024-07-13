import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoContents() {
  const [inputText, setInputText] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const addTodoBtn = () => {
    const newArr = {
      id: uuidv4(),
      todoTitle: inputText,
      isEditing: false,
    };

    setTodoList([newArr, ...todoList]);
    setInputText(" ");
  };
  const handleAddtext = (e) => {
    setInputText(e.target.value);
  };

  const edit = () => {
    
  }

  const del = () => {
    
  }
  const completeBtn = () => {
    
  }
  return (
    <>
      <div>
        {/* 새로운 투두 추가창 */}
        <label htmlFor="addTodo">new Todo</label>
        <input
          id="addTodo"
          value={inputText}
          type="text"
          onChange={handleAddtext}
        ></input>
        <button onClick={addTodoBtn}>추가</button>
      </div>

      {/* 투두 리스트 */}
      <ul>
        {todoList.map((t) => (
          <li>
            {t.isEditing ? (
              <>
                <input value={t.todoTitle}></input>
                <button onClick={completeBtn}>완료</button>
              </>
            ) : (
              <>
                <p>{t.todoTitle}</p>
                <button onClick={edit}>수정</button>
                <buttonon Click={del}>삭제</buttonon>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
