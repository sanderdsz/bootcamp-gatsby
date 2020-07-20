import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout"
import Head from "../components/atoms/head"

import ShiverAnimation from "../components/atoms/shiverAnimation"
import ShiverText from "../components/atoms/shiverText"

const Shiver = () => {
  return (
    <Layout>
      <Head title={"Shiver"} />
      <div className="shiver-container">
        <div className="shiver-content">
          <ShiverAnimation />
        </div>
        <div className="shiver-content">
          <ShiverText />
        </div>
      </div>
    </Layout>
  )
}

export default Shiver
