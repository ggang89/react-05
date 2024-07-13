import { useState } from "react"

export default function TodoContents() {
  const [addTodo, setAddTodo] = useState(" ")
  const addBtn = () => {
    
  }
  return (
    <>
      <div>
        {/* 새로운 투두 추가창 */}
        <label htmlFor="addTodo">new Todo</label>
        <input id="addTodo" value={addTodo} type="text"></input>
        <button onClick={addBtn}>추가</button>
      </div>
      
      {/* 투두 리스트 */}
      <ul>

      </ul>
    </>
  )
}