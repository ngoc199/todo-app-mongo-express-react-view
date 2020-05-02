import React from "react"
import Todo from "./Todo"

function List(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <form className="main" action={`/${props.list._id}`} method="POST">
        <input type="text" name="name" placeholder="Your todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {props.todoArray.map((todo, index) => {
          return (
            <Todo
              name={todo.name}
              key={index}
              id={todo._id}
              complete={todo.complete}
              list={props.list}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default List
