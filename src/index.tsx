import React from "react"
import { render } from "react-dom"

import App from "./App"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("app")
if (container) {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    container
  )
}
