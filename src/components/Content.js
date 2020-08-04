import React from "react"
import ContentManage from "./ContentManage"
import Button from "./Button"
import Note from "./Note"


class Content extends React.Component {
    state = {
        id: 0,
        tempId: " ",
        subject: " ",
        description: " ",
        myNoteArray: []
    }
    handleUpdate = (inputid) =>{
    let  myNote= JSON.parse(sessionStorage.getItem("myNote"));
    this.setState({
        tempId : inputid,
        subject:  myNote[inputid].subject,
        description: myNote[inputid].description
    })

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
            if(this.state.subject === " " || this.state.description === " "){
                 alert("field cannot be empty");
            }
            else{
                    //check if id already existed
                if((this.state.tempId !== " ")&&(Number(this.state.tempId) < this.state.myNoteArray.length)  ){
                    this.setState(prevState =>({
                      myNoteArray: prevState.myNoteArray.map((note, index) =>
                      index === Number(prevState.tempId) ? { ...note, 'subject': prevState.subject,
                      'description': prevState.description } : note,
                   ),
                      id : prevState.id,
                      tempId: 0,
                      subject:  "",
                      description: ""
                  }))
                  alert("Updated" ); 
              }
              else{
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
                alert("Added" ); 
            }

            }           
                   
        }
        //case for clear
        else {
            this.setState(prevState =>({
                id: prevState.id ,
                tempId : " ",
                subject: " ",
                description: " "
            }))
        }
          
    }

    render() {
        sessionStorage.setItem("myNote",  JSON.stringify(this.state.myNoteArray));
        return (
            <div className="mainContainer">

                <div className="container">
                    <Button upDateList={this.handleAddList} />
                    <ContentManage sub={this.state.subject} desc={this.state.description} updateValue={this.handleChange} />

                </div>
                <Note myNoteList={this.state.myNoteArray}  onUpdate={this.handleUpdate}/>


            </div>
        )
    }
}





export default Content