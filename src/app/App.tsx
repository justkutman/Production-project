import React from 'react';
import {Route, Routes, Link} from "react-router-dom";
  import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";
    const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
           <button onClick={toggleTheme}>Click</button>
          <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <AppRouter />
        </div>
    );
};

export default App;