import {FC} from 'react';
import "./Button.scss";

const Button:FC<{title: string, handler?: () => void}> = ({title, handler}) => {
    return (
        <button className="button" onClick={handler}>{title}</button>
    );
}

export default Button;
