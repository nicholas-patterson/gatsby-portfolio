module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Montserrat",
            variants: ["200", "400", "400i", "600", "600i", "700"]
          }
        ]
      }
    }
  ],
  siteMetadata: {
    title: "Nicholas Codes | Portfolio",
    siteUrl: "https://nicholascodes.com",
    description:
      "I'm Nicholas a 22 year old self-taught Full Stack developer, from Philadelphia",
    author: "Nicholas Patterson"
  }
};
