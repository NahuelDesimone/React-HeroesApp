import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { LoginScreen } from "../components/login/LoginScreen";
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroeID" element={<HeroScreen />} /> 
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </div>
    </>
  );
};
