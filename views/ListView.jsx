import React from "react"
import DefaultLayout from "./layout/layout"
import List from "./components/List"

function ListView(props) {
  return (
    <DefaultLayout title={props.title}>
      <List
        name={props.list.name}
        todoArray={props.list.todoArray}
        list={props.list}
      />
    </DefaultLayout>
  )
}

export default ListView
