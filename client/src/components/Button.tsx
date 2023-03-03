import {FC} from 'react';
import "./Button.scss";

const Button:FC<{title: string}> = ({title}) => {
    return (
        <button className="button">{title}</button>
    );
}

export default Button;
