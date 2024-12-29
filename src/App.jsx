import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./Components/Countries";
import CountryDetail from "./Components/CountryDetail";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";


export default function App() {
  const [isDarkMode,setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[isDarkMode]);
  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Routes>
        <Route path='/' element={<Countries />} />
        <Route path='country/:countryName' element={<CountryDetail />} />
        <Route path='*' element={<NotFound/>} />
        </Routes>
    </Router>
  )
}