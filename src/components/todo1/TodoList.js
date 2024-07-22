export default function TodoList({
  edit,
  del,
  handleInText,
  completeBtn,
  id,
  isEditing,
  todoTitle,
}) {
  return (
    <>
      
        {isEditing ? (
          <>
            <input value={todoTitle} onChange={handleInText}></input>
            <button onClick={completeBtn}>완료</button>
          </>
        ) : (
          <>
            <p>{todoTitle}</p>
            <button onClick={edit}>수정</button>
            <button onClick={del}>삭제</button>
          </>
        )}
    
    </>
  );
}
