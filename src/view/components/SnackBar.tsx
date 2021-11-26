import React from 'react';
import deletePic from "./delete.png";
import success from "./success.png";
import './snackbar.less';


export default function SnackBar(){

	const handleClick = (e:React.MouseEvent<HTMLDivElement>)=>{
		document.getElementById('tip')!.style.display = 'none';
	}

    return (
        <div className="snack" id="tip">
			<img src={success} className="snack_success"/>
			<p className="snack_p">提交成功，即将更新右侧</p>
			<img src={deletePic} className="snack_delete" onClick={handleClick}/>
		</div>
    )
}