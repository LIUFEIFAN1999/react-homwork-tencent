import React from 'react';
import './button.less'

interface IProps {
    onSubmit():void;
}

export default function Button(props: IProps){
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.onSubmit();
    }

    return (
        <div className="container">
            <button onClick={handleClick}>提交</button>
        </div>
    )
}