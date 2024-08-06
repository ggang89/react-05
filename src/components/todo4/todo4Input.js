import { styled } from "styled-components";
const Label = styled.label`
  margin-left: 20px;
`;
const Input = styled.input`
  text-align: center;
  font-style: italic;
  width: 400px;
  height: 30px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  margin: 0 5px;
  background-color: #ddd;
`;
const Button = styled.button`
  border: 1px gray solid;
  border-radius: 15px;
  padding: 7px 13px;
  background-color: white;
`;
export default function Todo4Input({ inputText, addTodoBtn, handleInputText }) {
  return (
    <>
      <Label htmlFor="inputTodo">New Todo...</Label>
      <Input
        id="inputTodo"
        type="text"
        value={inputText}
        onChange={handleInputText}
        placeholder="할 일을 입력하세요"
      ></Input>
      <Button onClick={addTodoBtn}> ➕추가</Button>
    </>
  );
}
