import { styled } from "styled-components";

const Button = styled.button`
  border: 1px gray solid;
  border-radius: 15px;
  padding: 3px 8px;
  margin-left: 3px;
  background-color: white;
`;
const TodoContent = styled.div`
  justify-content: center;
  display: flex;
  // border-bottom: 1px solid gray;
  width: 550px;
  height: 30px;
  padding: 3px;
`;
const Text = styled.p`
  margin: 3px auto;
`;
const Input = styled.input`
  border: 0;
  height: 25px;
`;
export default function Todo4List({
  isEditing,
  todoTitle,
  saveBtn,
  editBtn,
  delBtn,
  handleEditTodo,
}) {
  return (
    <>
      {isEditing ? (
        <TodoContent>
          <Text>
            <Input value={todoTitle} onChange={handleEditTodo}></Input>
          </Text>
          <Button onClick={saveBtn}>저장</Button>
        </TodoContent>
      ) : (
        <TodoContent>
          <Text>{todoTitle}</Text>
          <Button onClick={editBtn}>수정</Button>
          <Button onClick={delBtn}>삭제</Button>
        </TodoContent>
      )}
    </>
  );
}
