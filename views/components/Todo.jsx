import React, { useState } from "react"
import { response } from "express"

function Todo(props) {
  return (
    <li>
      <input type="checkbox" disabled checked={props.complete} />
      {props.name}
      <a
        href={`/${props.list._id}/${props.id}/complete`}
        className="btn btn-primary"
      >
        Complete
      </a>
      <a
        href={`/${props.list._id}/${props.id}/delete`}
        className="btn btn-danger"
      >
        Delete
      </a>
    </li>
  )
}

export default Todo
