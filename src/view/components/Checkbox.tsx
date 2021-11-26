import React from 'react';
import Item from './Item'

interface IProps {
    list: string[],
    onSelected(value:string):void;
    onDisabled(value:string):void;
}

export default function Checkbox(props: IProps){


    return (
        <>
        {
            props.list.map(item=>{
                return (
                        <>
                        <Item name={item} onSelected={props.onSelected} onDisabled={props.onDisabled}/>
                        <br></br>
                        </>
                    )
            })
        }
        </>
    )
}