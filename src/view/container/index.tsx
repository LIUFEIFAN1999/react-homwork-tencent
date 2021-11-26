import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Checkbox from '../components/Checkbox';
import {checkboxdata} from '../mock/chbdata';
import {selectdata} from '../mock/selectdata';
import Select from '../components/Select';
import Slide from '../components/Slide';
import Input from '../components/Input';
import Switch from '../components/Switch';
import Button from '../components/Button';
import SnackBar from '../components/SnackBar';
import './index.less'

const App = function App() {
    const emptyList:string[] = [];
    const [checkboxList, setList] = useState(emptyList);
    const [value, setValue] = useState('');
    const [slide, setSlide] = useState('0');
    const [inputString, setInputString] = useState('');
    const [switched, setSwitched] = useState('false');
    const [display, setDisplay] = useState(false);


    const handleOnSelected = (value: string) => {
        const newList = [...checkboxList];
        newList.push(value);
        setList(newList);
        console.log(newList);
    };

    const handleOnDisabled = (value: string) => {
        const index = checkboxList.findIndex(item => item===value);
        if (index < 0) return;
        const newList = [...checkboxList];
        newList.splice(index, 1);
        setList(newList);
        console.log(newList);
    };

    const handleSelect = (value:string) => {
        setValue(value);
    }

    const handleSlide = (value:string) => {
        setSlide(value);
    }

    const handleTextChanged = (value:string) => {
        setInputString(value);
    }

    const handleInputDelete = () => {
        setInputString("");
    }

    const handleSwitch = (value:string) => {
        setSwitched(value);
    }

    const handleSubmit = () => {
        setDisplay(true);
        document.getElementById('tip')!.style.display = 'block';
        setTimeout(handleHideTip, 2000);
        
    }

    const handleHideTip = ()=>{
        document.getElementById('tip')!.style.display = 'none';
    }

    return (
        <>
            <div className="left">
            <h2>checkbox多选：</h2>
            <Checkbox list={checkboxdata} onSelected={handleOnSelected} onDisabled={handleOnDisabled}/>
            <h2>select单选框：</h2>
            <Select list={selectdata} onSelect={handleSelect}/>
            <h2>slide进度条（可拖动）:</h2>
            <Slide max="100" onSlide={handleSlide}/>
            <h2>input输入之后可以清除：</h2>
            <Input onTextChanged={handleTextChanged} onTextDelete={handleInputDelete}/>
            <h2>switch开关：</h2>
            <Switch onSwitchChanged={handleSwitch}/>
            <Button onSubmit={handleSubmit} />
            </div>

            <div className="right">
                <div className={ display ? "content":"contentHidden" }>
                    <h2>checkbox多选：</h2>
                    <p>{checkboxList}</p>
                    <h2>select单选框：</h2>
                    <p>{value}</p>
                    <h2>slide进度条（可拖动）:</h2>
                    <p>{slide}</p>
                    <h2>input输入之后可以清除：</h2>
                    <p>{inputString}</p>
                    <h2>switch开关：</h2>
                    <p>{switched}</p>
                    <SnackBar/>
                </div>
            </div>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
