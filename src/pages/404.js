import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout/layout"
import Head from "../components/atoms/head/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title={"404"} />
      <h1>404, ops.</h1>
      <p>
        <Link to="/">Volte à homepage</Link>
      </p>
    </Layout>
  )
}

export default NotFound
