import React from 'react';
  import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
    const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;