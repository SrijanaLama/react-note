import React from "react"
import '../index.css'
import { FaTrash } from "react-icons/fa"

const Note = props => {
    const handleClick = (e) =>{
        props.onUpdate(e.currentTarget.id);
       
    }
    const handleDelete = (e) =>{
        if (window.confirm("Delete the item?")) {
        //Logic to delete the item
        var element = document.getElementById(e.currentTarget.id);
         element.parentNode.removeChild(element);
    }
    }
    return (
        <div className="note">
            <h2>Notelist</h2>
            {
                props.myNoteList.map(note => {
                    return (
                        <div key={note.id} id={note.id} className="noteList" onClick={handleClick}>
                            <li className="list">
                                <h4 className="subNote"> {note.subject}</h4>
                                <hr></hr>
                            </li>
                            <button id={note.id} onClick={handleDelete} className="deleteBtn"> <FaTrash /> </button>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Note