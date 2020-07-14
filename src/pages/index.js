import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout"
import Head from "../components/atoms/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>hello.</h1>
      <p>
        I'm Sander, full-stack developer living in the beautiful Santa Catarina.
      </p>
    </Layout>
  )
}

export default IndexPage
