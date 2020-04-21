import React from "react"

import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <h1>Sander Zuchinalli</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
