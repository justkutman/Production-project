import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss"
import {useTheme} from "app/providers/ThemeProvider";

interface IProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: IProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            TOGGLE
        </button>
    );
};