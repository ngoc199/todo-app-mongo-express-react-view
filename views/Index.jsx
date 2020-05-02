import React from "react"
import DefaultLayout from "./layout/layout"
import AllList from "./components/AllList"

function Index(props) {
  return (
    <DefaultLayout title={props.title}>
      <AllList listArray={props.listArray} />
    </DefaultLayout>
  )
}

export default Index
