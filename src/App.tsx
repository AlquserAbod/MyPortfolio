/* eslint-disable react-refresh/only-export-components */
import { BrowserRouter, Route, Routes } from "react-router-dom";


import MainPage from "./pages/MainPage";
import { withTranslation } from "react-i18next";
import { isRtl } from "./utils/i18n";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";



function App() {
  const directionClass = isRtl() ? 'rtl' : 'ltr';

  useEffect(() => {
    document.body.classList.add(directionClass);

    return () => {
      document.body.classList.remove(directionClass);
    };
  }, [directionClass]);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Handle admin dashboard routes */}
      </Routes>

      <Toaster
  />
    </BrowserRouter>
  )
}

export default withTranslation()(App)
