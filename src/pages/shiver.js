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
        <ShiverAnimation />
        <ShiverText />
      </div>
      <div className="shiver-container-title">
        <h2>The artic frost design system</h2>
      </div>
      <div className="shiver-container">
        <div className="shiver-container-text">
          <p>
            Shiver is a personal project, inspired on Nord theme palette,
            focused on good readability and less eye strain.
          </p>
        </div>
      </div>
      <div className="shiver-container">
        <div className="shiver-container-button">
          <button className="shiver-button-medium-primary-blue">
            Coming soon
          </button>
        </div>
        <div className="shiver-container-button">
          <button className="shiver-button-medium-primary-light">
            Coming soon
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Shiver
