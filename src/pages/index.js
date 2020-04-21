import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Olá,</h1>
      <h2>Este é um mockup para blogs</h2>
      <p>
        Precisa de um desenvolvedor?
        <Link to="/contact">Entre em contato.</Link>
      </p>
    </div>
  )
}

export default IndexPage
