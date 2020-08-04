import React from "react"
import styles from "../css/contentcss.module.css"

const ContentManage=props=>{
    return(
        <div className={styles.content}>

        <label className="labelCss">Subject</label>
        <input  
            type="text" 
            name="subject" 
            placeholder="Subject" 
            onChange={props.updateValue} 
            value={props.sub} 
            className ={styles.subject}
            autoComplete="off"
        
         />
        <label className="labelCss">Description</label>
        <textarea 
             name="description"
             value={props.desc} 
             onChange={props.updateValue} 
             className={styles.description}
         />

        </div>
    )

}
export default ContentManage