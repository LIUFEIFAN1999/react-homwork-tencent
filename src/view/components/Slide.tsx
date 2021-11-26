import React, { useState } from 'react';
import { strToNumber } from 'src/common/utils';
import './slide.less';

interface IProps {
    max: string,
    onSlide(value:string):void;
}

export default function Slide(props: IProps){
    const [value, setValue] = useState('0');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const min = strToNumber(e.target.min);
        const max = strToNumber(e.target.max);
        const value = strToNumber(e.target.value);
        props.onSlide(e.target.value);
        setValue(e.target.value);
        e.target.style.backgroundSize = (value-min) * 100 / (max-min) + '% 100%';

    };

    return (
        <>
            <input type="range" max={props.max} value={value} onChange={handleChange}></input>
        </>
    )
}