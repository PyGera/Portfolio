// import {graphql, useStaticQuery} from "gatsby";

// const query = useStaticQuery(graphql`
//     query favicon {
//       _site {
//         favicon
//       }
//     }
// `)

require('dotenv').config({
  path: '.env'
});

module.exports = {
  siteMetadata: {
    title: `Federico Gerardi's Portfolio`,
    description: `Made with <3 by Federico Gerardi`,
    author: `Federico Gerardi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${__dirname}/src/images`,
      },

    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_API_KEY,
        preview: false,
        disableLiveReload: false,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Federico Gerardi's Porfolio`,
        short_name: `FG`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#e41937`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
