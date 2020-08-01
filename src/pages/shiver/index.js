import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/templates/layout"
import Head from "../../components/atoms/head"

import ShiverAnimation from "../../components/atoms/shiverIcebergAnimation"
import ShiverText from "../../components/atoms/shiverTextAnimation"
import Button from "../../components/atoms/button"
import { Button as Botao } from "shiver-design-system"

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
          <a href="https://www.npmjs.com/package/shiver-design-system">
            <Button label="Repository" className="button primary"></Button>
          </a>
        </div>
        <div className="shiver-container-button">
          <a href="https://shiver-storybook.netlify.app/?path=/docs/introduction-getting-started--page">
            <Botao theme="primary-outline">Storybook</Botao>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Shiver
