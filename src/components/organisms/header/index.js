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
        <ul className="navList">
          <li>
            <Link className="navItem" activeClassName="activeNavItem" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/contact"
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
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
