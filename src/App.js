import "./App.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import Menu from "./components/Menu";
import Address from "./components/Address";
import Hero from "./components/Hero";
import WeCare from "./components/WeCare";
import MileStones from "./components/MileStones";
import OurServices from "./components/OurServices";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#71CD28",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />

      <Address />
      <Hero />
      <WeCare />
      <MileStones />
      <OurServices />
      <Gallery />
      <Testimonials />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
