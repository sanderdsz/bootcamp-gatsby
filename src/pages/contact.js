import React from "react"

import Layout from "../components/templates/layout/layout"
import Head from "../components/atoms/head/head"

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
