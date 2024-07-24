export default function Todo4Input({ inputText, addTodoBtn, handleInputText }) {
  return (
    <>
      <label htmlFor="inputTodo">New Todo...</label>
      <input
        id="inputTodo"
        type="text"
        value={inputText}
        onChange={handleInputText}
        placeholder="할 일을 입력하세요"
      ></input>
      <button onClick={addTodoBtn}> ➕추가</button>
    </>
  );
}