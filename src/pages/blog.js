import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/templates/layout"
import Head from "../components/atoms/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      <Head title={"Blog"} />
      <Layout>
        <ol className="posts">
          {data.allContentfulBlogPost.edges.map(edge => {
            return (
              <li className="post">
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
