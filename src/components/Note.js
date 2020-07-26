import React from "react"
import '../index.css'
import { FaTrash } from "react-icons/fa"

const Note = props => {
    return (
        <div className="note">
            <h2>Notelist</h2>
            {
                props.myNoteList.map(note => {
                    return (
                        <div key={note.id} id={note.id} className="noteList">
                            <li className="list">
                                <h1 hidden>  {note.id} </h1>
                                <h3 className="subNote"> {note.subject}</h3>
                            </li>
                            <button onClick={() => handleDelete(note.id)} className="deleteBtn"> <FaTrash /> </button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
const handleDelete = (item) => {
    
    if (window.confirm("Delete the item?")) {
        //Logic to delete the item
        var element = document.getElementById(item);
        element.parentNode.removeChild(element);
    }
   



}
export default Note