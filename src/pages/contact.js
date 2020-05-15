import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Head title={"Contato"} />
      <Layout>
        <h1>Contato</h1>
        <p>
          <a
            href="http://https://twitter.com/sanderdsz"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sanderzuchinalli
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
