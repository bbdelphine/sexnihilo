module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "casper", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Sex Nihilo", // Site title.
  siteTitleAlt: "Le Choix de l'abstinence", // Alternative site title for SEO.
  siteLogo:
    "https://imageshack.com/a/img922/281/OUzMPJ.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://haysclark.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-starter-casper", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Le Choix de l'abstinence", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "https://imageshack.com/a/img924/8573/MdhM1V.png", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Delphine", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 2, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://www.facebook.com/NihiloSex",
    "https://twitter.com/_SexNihilo",
    "mailto:sexnihilo1@gmail.com"
  ],
  postDefaultCategoryID: "", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/NihiloSex/",
      iconClassName: "fa fa-facebook" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/_SexNihilo",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:sexnihilo1@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Sex Nihilo" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "", // Used for setting manifest and progress theme colors.
  backgroundColor: "", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
