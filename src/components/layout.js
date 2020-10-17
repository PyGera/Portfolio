import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <div>{children}</div>
    </>
  )
}

export default Layout
