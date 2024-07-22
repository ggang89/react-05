export default function Todo3List({
  isEditing,
  handleEditTodo,
  title,
  saveBtn,
  editBtn,
  delBtn,
}) {
  return (
    <>
      {isEditing ? (
        <>
          <input onChange={handleEditTodo} value={title}></input>
          <button onClick={saveBtn}>저장</button>
        </>
      ) : (
        <>
          <p>{title}</p>
          <button onClick={editBtn}>수정</button>
          <button onClick={delBtn}>삭제</button>
        </>
      )}
    </>
  );
}
