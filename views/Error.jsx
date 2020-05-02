import React from "react"

import DefaultLayout from "./layout/layout"

function Error(props) {
  return (
    <DefaultLayout title={props.title}>
      <h1>{props.error}</h1>
    </DefaultLayout>
  )
}

export default Error
