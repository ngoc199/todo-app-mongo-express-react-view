import React from "react"

function DefaultLayout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>{props.children}</body>
    </html>
  )
}

export default DefaultLayout
