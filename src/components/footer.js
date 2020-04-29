import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        footer
      }
    }
  }
`)

  return (
    <div>
      <p>{data.site.siteMetadata.footer}</p>
    </div>
  )
}

export default Footer
 