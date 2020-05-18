import React from "react"

import Layout from "../components/templates/layout/layout"
import Head from "../components/atoms/head/head"

const AboutPage = () => {
  return (
    <div>
      <Head title={"Sobre"} />
      <Layout>
        <h1>Sobre</h1>
        <p>Desenvolvedor fullstack, apaixonado por frontend.</p>
      </Layout>
    </div>
  )
}

export default AboutPage
