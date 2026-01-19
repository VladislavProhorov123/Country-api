import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
import MainPage from "./pages/MainPage";
import Favorites from "./pages/Favorites";
import Countries from "./pages/Countries";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
