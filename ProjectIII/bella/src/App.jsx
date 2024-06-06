import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Bella from "./pages/Bella.jsx";
import About_us from "./pages/About_us.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Grid from "@mui/material/Grid";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      light: '#81d4fa', // Light Blue
      main: '#29b6f6',  // Medium Blue
      dark: '#0288d1',  // Dark Blue
      contrastText: '#fff',
    },
    secondary: {
      light: '#b3e5fc', // Light Blue Grey
      main: '#81d4fa',  // Light Blue
      dark: '#4ba3c7',  // Darker Blue Grey
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}> 
      <Router>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route path="/" element={<Bella />} />
              <Route path="/about_us" element={<About_us />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
  </ThemeProvider>
    </>
  );
}

export default App;