import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";


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
    <header className="header">
      <h1>
        <Link className="title" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link 
              className="nav-item"
              activeClassName="active-nav-item"
              to="/"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/blog"
            >
              blog
            </Link>
          </li>
          <li>
            <AniLink
            className="nav-item-shiver"
            activeClassName="active-nav-item-shiver"
            fade to="/shiver">
              shiver
            </AniLink>
          </li>
          {/** 
          <li>
            <Link
              className="nav-item"
              activeClassName="active-nav-item"
              to="/contact"
            >
              Contact
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
          */}
          <li>
            <DarkModeToogle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
