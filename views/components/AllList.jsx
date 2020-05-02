import React from "react"

function AllList(props) {
  return (
    <div>
      <form className="main" action="/" method="POST">
        <input type="text" placeholder="List name" name="name" />
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="description"
        ></textarea>
        <button type="submit">Add List</button>
      </form>
      <ul>
        {props.listArray.map((list, index) => {
          return (
            <li key={index}>
              <a href={list._id}>{list.name}</a>
              <a href={`/${list.id}/edit`} className="btn btn-primary">
                Edit
              </a>
              <a href={`/${list.id}/delete`} className="btn btn-danger">
                Delete
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllList
