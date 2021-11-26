import React from 'react';
import { booleanToStr } from 'src/common/utils';
import './switch.less'

interface IProps {
    onSwitchChanged(value:string):void;
}

export default function Switch(props: IProps){
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = booleanToStr(e.target.checked);
        props.onSwitchChanged(value);
    }

    return (
        <div className="container">
            <input type="checkbox" className="switch" onChange={handleChange}/>
        </div>
    )
}