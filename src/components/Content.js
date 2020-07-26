import React from "react"
import ContentManage from "./ContentManage"
import Button from "./Button"
import Note from "./Note"


class Content extends React.Component {
    state = {
        id: 0,
        subject: " ",
        description: " ",
        myNoteArray: []
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState(
            {
                [name]: value
            }
        )

    }
    handleAddList = (event) => {
        
        const { value } = event.target
        if (value === "add") {
            this.setState(prevState => ({
                myNoteArray: [...prevState.myNoteArray, {
                    'id': prevState.id,
                    'subject': prevState.subject,
                    'description': prevState.description
                }],
                id: prevState.id + 1,
                subject: " ",
                description: " "

            }))
             alert("Added");
        }
        else {
            this.setState({
                subject: " ",
                description: " "
            })
        }
        

    }

    render() {
        return (
            <div className="mainContainer">

                <div className="container">
                    <Button upDateList={this.handleAddList} />
                    <ContentManage sub={this.state.subject} desc={this.state.description} updateValue={this.handleChange} />

                </div>
                <Note myNoteList={this.state.myNoteArray} />


            </div>
        )
    }
}





export default Content