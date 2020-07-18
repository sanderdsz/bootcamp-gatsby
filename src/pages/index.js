import React from "react"

import Layout from "../components/templates/layout"
import Head from "../components/atoms/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>hello. <spam role="img">👋</spam></h1> 
      <p>
        I'm Sander, full-stack developer living in the beautiful Santa Catarina.
      </p>
    </Layout>
  )
}

export default IndexPage
