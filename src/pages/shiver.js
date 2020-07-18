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
        <ShiverAnimation/>
        <div>
          <ShiverText/>
        </div>
    </Layout>
  )
}

export default Shiver
