import GlobalFonts from "./fonts/fonts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GlobalStyles from "../GlobalStyles";

import { ThemeProvider } from "styled-components";
import SharedLayout from "../SharedLayout";
function App() {
  const theme = {
    colors: {
      textColor: "#011627",
      primaryColor2: "#2ec4b6",
      secondaryColor1: "#e71d36",
      secondaryColor2: "#ff9f1c",
      primaryColor1: "#fdfffc",
    },
    mobile: "768px",
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
          <GlobalStyles />
          <GlobalFonts />
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
