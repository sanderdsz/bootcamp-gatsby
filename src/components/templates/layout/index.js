import React from "react"

import Header from "../../organisms/header"
import Footer from "../../organisms/footer"

/*
import "../../../styles/index.scss"
import "../../../styles/darkMode.scss"
import layoutStyles from "./styles.module.scss"
*/

import "../../../styles/global.scss"

const Layout = props => {
  return (
    <div>
      <div>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
