/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages";
import { withTranslation } from "react-i18next";
import { isRtl } from "./utils/i18n";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./layout/Navbar";
import Footer from "./layout/footer";
import NotFound from "./pages/not_found";

import 'react-multi-carousel/lib/styles.css'


function App() {
  const directionClass = isRtl() ? "rtl" : "ltr";

  useEffect(() => {
    document.body.classList.add(directionClass);

    return () => {
      document.body.classList.remove(directionClass);
    };
  }, [directionClass]);

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default withTranslation()(App);
