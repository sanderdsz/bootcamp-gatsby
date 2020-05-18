import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout/layout"
import Head from "../components/atoms/head/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Olá.</h1>
      <h2>
        Eu sou Sander, desenvolvedor full-stack vivendo na bela Santa Catarina.
      </h2>
      <p>
        Precisa de um desenvolvedor?{" "}
        <Link to="/contact">Entre em contato.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
