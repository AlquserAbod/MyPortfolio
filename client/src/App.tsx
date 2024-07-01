import { BrowserRouter, Route, Routes } from "react-router-dom";

import utc  from "dayjs/plugin/utc";
import dayjs from "dayjs";
import RefineComponent from "./components/RefineComponent";
import MainPage from "./pages/MainPage";


dayjs.extend(utc); // Extend dayjs with utc plugin

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" element={<RefineComponent />} /> {/* Handle admin dashboard routes */}

        <Route path="/" element={<MainPage />} /> {/* Handle admin dashboard routes */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
