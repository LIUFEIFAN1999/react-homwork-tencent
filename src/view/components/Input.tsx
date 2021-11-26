import React, { useState } from 'react';
import './input.less'

interface IProps {
    onTextChanged(value:string):void;
    onTextDelete():void
}

export default function Input(props: IProps){
    const [value, setValue] = useState("");
    const [focus, setFocus] = useState(false);
    const [empty, setEmpty] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onTextChanged(e.target.value);
        setValue(e.target.value);
        setEmpty(e.target.value === "" ? true:false);
    };

    const handleDelete = ()=>{
        props.onTextDelete();
        setValue("");
        setEmpty(true);
    }

    const handleBlur = ()=>{
        setFocus(false);
    }

    const handleFocus = ()=>{
        setFocus(true);
    }

    return (
        <div className={ focus ? "inputDiv_focus":"inputDiv"}>
            <input type="text" value={value}  placeholder="输入内容后出现清除按钮" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus}></input>
            <span className={empty ? "delete_hidden":"delete"} onClick={handleDelete} >x</span>
        </div>
    )
}