require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Shreyas Gupta`,
    // Default title of the page
    siteTitleAlt: `Shreyas Gupta`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Shreyas Gupta`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://minimal-blog.lekoarts.de`,
    // Used for SEO
    siteDescription: `Personal website of Shreyas Gupta`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpeg`,
    // Twitter Handle
    author: `Shreyas Gupta`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/awwmaaigawwd/`,
        image: `./static/instagram.svg`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/awwmaaigawwd/`,
        image: `./static/instagram.svg`,
      },
      {
        name: `Linkedin`,
        url: `https://www.linkedin.com/in/shreyas-gupta/`,
        image: `./static/twitter.svg`,
      },
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Contact`,
            slug: `/contact`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/awwmaaigawwd/`,
            image: `./static/twitter.svg`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/awwmaaigawwd/`,
            image: `./static/instagram.svg`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/shreyas-gupta/`,
            image: `./static/twitter.svg`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shreyas Gupta`,
        short_name: `Shreyas Gupta`,
        description: `Personal website of Shreyas Gupta.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
