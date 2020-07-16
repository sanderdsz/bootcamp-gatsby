/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sander Zuchinalli",
    author: "Sander Zuchinalli",
  },

  plugins: [
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "2my71lyhesss",
        accessToken: "WF_iHG7fo6sDg8XPAjR-hPjYjUUlbTXwSmfVdhDXXqE",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
            resolve: `gatsby-remark-embedder`,
          },
        ],
      },
    },
  ],
}
