import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const pageFont = "'Archivo', sans-serif";

const globalTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          borderRadius: 25,
          paddingLeft: 20,
          paddingRight: 20,
          marginLeft: 5,
          marginRight: 5,
          textTransform: "capitalize",
          boxShadow: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      //
      main: "#FFFF17",
    },
    secondary: {
      main: "#C20000",
      light: "#FF4747",
      dark: "#7A0000",
    },
    tertiary: {
      main: "#34741B",
      light: "#5AC62F",
      dark: "#1E4210",
    },
    //
    neutral: {
      main: "#DAEBFB",
      light: '#EDF5FD',
      dark: '#105493'
    },
    //
    info: {
      main: "#2B2728",
      light: '#D8D4D5'
    },
  },
  // typography: {
  //   fontFamily: pageFont,
  //   h1: {
  //     fontFamily: pageFont,
  //     fontSize: 30,
  //     fontWeight: 800,
  //     paddingTop: 0,
  //     paddingBottom: 20,
  //     '@media (min-width:600px)': {
  //       fontSize: 48,
  //       paddingTop: 0,
  //     },
  //     '@media (min-width:1200px)': {
  //       fontSize: 60,
  //       paddingTop: 40,
  //     },
      
    // },
    h2: {
      fontFamily: pageFont,
      fontSize: 25,
      '@media (min-width:600px)': {
        fontSize: 40,
      },
      fontWeight: 400,
      marginBottom: 20,
    },
    h3: {
      fontFamily: pageFont,
      fontSize: 20,
      '@media (min-width:600px)': {
        fontSize: 26,
      },
      '@media (min-width:900px)': {
        fontSize: 32,
      },
      fontWeight: 800,
      marginBottom: 20,
      // color: "white",
    },
  },
// }
);
// globalTheme = responsiveFontSizes(globalTheme)

export default globalTheme;
