import React from "react"

import Header from "../../organisms/header"
import Footer from "../../organisms/footer"

import "../../../styles/global.scss"

const Layout = props => {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
