module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WLX9VKV",
        includeInDevelopment: false,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-background-image",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Nicholas | Full-Stack Developer",
        short_name: "Nicholas Codes",
        background_color: "#333",
        theme_color: "#4753dd",
        start_url: "/",
        icon: "./src/data/images/FinalDesignFadeCopy.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./src/data/",
      },
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variations: ["200", "400", "400i", "600", "600i", "700"],
            },
          ],
        },
      },
    },
  ],
  siteMetadata: {
    title: "Nicholas Codes | Portfolio",
    siteUrl: "https://nicholascodes.com",
    description: "I'm Nicholas a Full Stack developer, from Philadelphia",
    author: "Nicholas Patterson",
    email: "nicholaspatterson36@gmail.com",
    twitter_username: "@nicholascodes",
    site_image: "./src/data/images/FinalDesignFadeCopy.png",
  },
};
