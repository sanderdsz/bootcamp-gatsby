import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/layout"
import Head from "../components/atoms/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title={"404"} />
      <Link to="/">
        <div class="hole-wrapper">
          <div class="hole">
            <div class="wood"></div>
            <div class="hand">
              <span class="finger-up"></span>
              <span class="finger"></span>
              <span class="finger"></span>
              <span class="finger"></span>
              <span class="finger"></span>
            </div>
            <div class="arm">
            </div>
        </div>
      </div>
    </Link>
  </Layout>
  )
}

export default NotFound
