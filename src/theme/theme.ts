export default {
  palette: {
    primary: {
      main: "#3FEEE6",
      light: "#65f1eb",
      dark: "#2ca6a1",
    },
    secondary: {
      main: "#55BCC9",
      light: "#77c9d3",
      dark: "#3b838c",
    },
    optional: {
      main: "#97CAEF",
      light: "#abd4f2",
      dark: "#698da7",
    },
    highlight: {
      main: "#FC4445",
      light: "#fc696a",
      dark: "#b02f30",
    },
    light: {
      main: "#CAFAFE",
      light: "#d4fbfe",
      dark: "#8dafb1",
    },
    dark: {
      main: "#1c2f2f",
      light: "#213737",
      dark: "#182828",
    },
  },

  backGroundColor: {
    main: "linear-gradient(45deg, #d4fbfe, #dcfbfe);",
  },

  spacing: {
    verySmall: "0.2rem",
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },

  borderRadius: {
    small: "0.1rem",
    medium: "0.5rem",
    large: "1rem",
  },

  mediaQueries: {
    xs: "only screen and (max-width: 600px)",
    sm: "only screen and (max-width: 960px)",
    md: "only screen and (max-width: 1280px)",
    //@media ${({ theme }) => theme.mediaQueries.md} {}
  },

  fontFamily: {
    main: "'Montserrat', sans-serif;",
  },

  fontSize: {
    small: "1.2rem",
    medium: "1.5rem",
    large: "2rem",
  },

  boxShadow: {
    card: "0 3px 10px rgb(0 0 0 / 0.2)",
  },
};
