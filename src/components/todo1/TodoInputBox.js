
export default function TodoInputBox({ inputText, handleAddtext2, addTodo }) {
  return (
    <>
      <div>
        <label htmlFor="addTodo">new Todo</label>
        <input
          id="addTodo"
          value={inputText}
          type="text"
          onChange={handleAddtext2}
        ></input>
        <button onClick={addTodo}>추가</button>
      </div>
    </>
  );
}