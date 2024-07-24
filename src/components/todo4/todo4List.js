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
        <>
          <input value={todoTitle} onChange={handleEditTodo}></input>
          <button onClick={saveBtn}>저장</button>
        </>
      ) : (
        <>
          <p>{todoTitle}</p>
          <button onClick={editBtn}>수정</button>
          <button onClick={delBtn}>삭제</button>
        </>
      )}
    </>
  );
}