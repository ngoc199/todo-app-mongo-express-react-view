import React, { useState } from "react"
import DefaultLayout from "./layout/layout"

function EditList(props) {
  const [listProps, setListProps] = useState({
    name: props.list.name,
    description: props.list.description,
  })

  //   Update value on type
  function updateValue(event) {
    const { fieldName, fieldValue } = event.target

    setListProps((prevValue) => {
      return { ...prevValue, [fieldName]: fieldValue }
    })

    event.preventDefault()
  }

  return (
    <DefaultLayout title={props.title}>
      <form action={`/${props.list._id}/edit`} method="post">
        <input
          type="text"
          name="name"
          value={listProps.name}
          onChange={updateValue}
        />
        <textarea
          name="description"
          value={listProps.description}
          onChange={updateValue}
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Update</button>
      </form>
    </DefaultLayout>
  )
}

export default EditList
