module.exports = {
  siteMetadata: {
    title: "Gatsby Blog from sreng",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
