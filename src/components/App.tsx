import "../styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { Suspense, useContext } from "react";
import { Theme, ThemeContext } from "../theme/ThemeContext";
import { useTheme } from "src/theme/useTheme";
import { classNames } from "helpers/classNames/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app',{},[theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
