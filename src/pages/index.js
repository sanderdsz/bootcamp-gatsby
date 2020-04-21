import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Olá,</h1>
      <h2>Este é um mockup para blogs</h2>
      <p>
        Precisa de um desenvolvedor?
        <Link to="/contact">Entre em contato.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
