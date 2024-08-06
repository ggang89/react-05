import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo4Input from "./todo4Input";
import Todo4List from "./todo4List";
import { styled } from "styled-components";
const Wrapper = styled.div`
  margin: 0 auto;
  width: 600px;
  padding: 4px;
  box-sizing: border-box;
`;
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Todo4Box() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoBtn = () => {
    const newTodo = { id: uuidv4(), todoTitle: inputText, isEditing: false };
    setInputText(" ");
    setTodoList([newTodo, ...todoList]);
  };

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const saveEditBtn = (id) => {
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
  const handleEditText = (e, id) => {
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
    <Wrapper>
      <Title>TodoList 4</Title>
      <Todo4Input
        inputText={inputText}
        addTodoBtn={addTodoBtn}
        handleInputText={handleInputText}
      />
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <Todo4List
              isEditing={t.isEditing}
              todoTitle={t.todoTitle}
              handleEditTodo={(e) => {
                handleEditText(e, t.id);
              }}
              saveBtn={() => {
                saveEditBtn(t.id);
              }}
              editBtn={() => {
                saveEditBtn(t.id);
              }}
              delBtn={() => {
                del(t.id);
              }}
            />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
