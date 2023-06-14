import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
import './styles/index.scss'
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {useTheme} from "./hooks/useTheme";
import {classNames} from "./helpers/classNames/classNames";
const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
           <button onClick={toggleTheme}>Click</button>
          <Link to="/">Main</Link>
            <Link to="/about">About</Link>
         <Routes>
            <Route path="/about" element={<AboutPage />} />
             <Route path="/" element={<MainPage />} />
         </Routes>
        </div>
    );
};

export default App;