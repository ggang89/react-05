export default function InputTodo({newTodo,
handleInputTodo,
AddTodoBtn}) {
  
  return (
    <>
      <label htmlFor="addTodo">ADD </label>
      <input
        value={newTodo}
        onChange={handleInputTodo}
        type="text"
        id="addTodo"
      ></input>
      <button onClick={AddTodoBtn}>+Add List</button>
    </>
  );
}