export default function Todo2List({isEditing,todoTitle,handleEditTodo,saveBtn,edit,del }) {
  
  return (
    <>
      {isEditing ? (
        <>
          <input value={todoTitle} onChange={handleEditTodo}></input>
          <button onClick={saveBtn}> 저장 </button>
        </>
      ) : (
        <>
          <p>{todoTitle}</p>
          <button onClick={edit}>수정 </button>
          <button onClick={del}> 삭제 </button>
        </>
      )}
    </>
  );
}