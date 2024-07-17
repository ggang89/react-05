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
      <li key={id}>
        {/* key 값 어디에 연결해줘야 하나
        props이름이 id라서 부모에 id로 연결하면 오류뜸 */}
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
      </li>
    </>
  );
}
