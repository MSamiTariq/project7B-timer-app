import React from 'react';
import './Button.modules.css';

type Props = {
    functionality: () => void;
    buttonValue: string;
}

let cName: string;

const Button: React.FC<Props> = ({ functionality, buttonValue }) => {

    if (buttonValue === 'Start') {
        cName = 'start'
    }
    if (buttonValue === 'Stop') {
        cName = 'stop'
    }
    if (buttonValue === 'reset') {
        cName = 'reset'
    }
    return (
            <button className={cName} onClick={functionality}>{buttonValue}</button>
    )
}

export default Button