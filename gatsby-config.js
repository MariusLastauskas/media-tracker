/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/content/blog`,
            },
        },
    ],
};
