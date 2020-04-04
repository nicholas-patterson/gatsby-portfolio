module.exports = {
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-background-image",
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      trackingId: "UA-162762200-1",
      head: false,
    },
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
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Montserrat",
            variants: ["200", "400", "400i", "600", "600i", "700"],
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: "Nicholas Codes | Portfolio",
    siteUrl: "https://nicholascodes.com",
    description:
      "I'm Nicholas a 22 year old self-taught Full Stack developer, from Philadelphia",
    author: "Nicholas Patterson",
    email: "nicholaspatterson36@gmail.com",
    twitter_username: "@Nick_Codes_",
    site_image: "./src/data/images/FinalDesignFadeCopy.png",
  },
};
