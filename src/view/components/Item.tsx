import React, { useState } from 'react';
import './item.less'

interface IProp {
    name: string;
    onSelected(value:string):void;
    onDisabled(value:string):void;
}

export default function HookExample(props: IProp) {
    const [checked, setChecked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if(checked){
            setChecked(false);
            props.onDisabled(props.name);
        }
        else{
            setChecked(true);
            props.onSelected(props.name);
        }
    };
    return (
        <div onClick={handleClick}>
            <input type="checkbox" className="checkbox" checked={checked}/>{props.name}
        </div>
    );
}