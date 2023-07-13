import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface IProps {
    className?: string;
}

export const Navbar = ({ className }: IProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to="/">Main</AppLink>
                <AppLink to="/about">About</AppLink>
            </div>
        </div>
    );
};

