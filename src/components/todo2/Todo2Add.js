export default function Todo2Add({handleInputTodo,inputTodo,newTodoBtn }) {
  
  return (
    <>
      <label htmlFor="newTodo">New Todo</label>
      <input
        onChange={handleInputTodo}
        value={inputTodo}
        type="text"
        id="newTodo"
      ></input>
      <button onClick={newTodoBtn}>➕Add Todo</button>
    </>
  );
}