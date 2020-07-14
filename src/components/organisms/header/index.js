import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import DarkModeToogle from "../../atoms/darkModeToggle"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <h1>
        <Link className="title" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link className="nav-item" activeClassName="active-nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/contact"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/about"
            >
              Sobre
            </Link>
          </li>
          <li>
            <DarkModeToogle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
