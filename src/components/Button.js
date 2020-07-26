import React from "react"
import '../index.css';
import {FaTrash,FaPlus} from "react-icons/fa"

const Button = (props)=>{
    
    return(
        <div className="buttonCss">
            <button onClick={props.upDateList} value="add"  className="btn" > <FaPlus/> Add </button>
            <button  onClick={props.upDateList} value="clear" className="btn"> <FaTrash/> Clear</button>
    
            </div>

    )

}
export default Button