module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Welcome to Dave's portal! This portfolio website contains personal websites / web apps, etc. that I've been working on.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

/*
//Add the below code to the "plugins" section if you have any non css files
- ie: scss mixins, variables, functions, etc - stuff that isn't css
{
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `@import "${__dirname}/src/components/scss/stylesContainer"`
  }
},
*/