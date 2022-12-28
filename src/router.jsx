import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Login from "./views/Login"
import Register from "./views/Register"
import Home from "./views/Home"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default Router