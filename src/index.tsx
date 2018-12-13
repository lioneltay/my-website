import React from "react"
import { render } from "react-dom"

import App from "./App"
import { BrowserRouter } from "react-router-dom"

import "./service-worker"

const container = document.getElementById("app")
if (container) {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    container
  )
}
