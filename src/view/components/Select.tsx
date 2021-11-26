import React, { useState } from 'react';
import './select.less';

interface IProps {
    list: string[],
    onSelect(name:string):void;
}

export default function Select(props: IProps){

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let index = e.target.options.selectedIndex;
        props.onSelect(props.list[index]);
    };

    return (
        <>
        {
            <select onChange={handleChange} >
                {
                    props.list.map(item=>{
                        return <option value={item}>{item}</option>
                    })
                }
            </select>
        }
        </>
    )
}