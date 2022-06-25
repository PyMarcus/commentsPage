import React, { Component } from "react";
import Form from "../forms/Form";
import Comment from "../comments/Comment";


class Mainpage extends Component{

    // state is a object with data thats will pass to components
    state = {
        comments: [
            {
                name: "Marcus",
                email: "marcus@outlook.com",
                message: "Olá, mundo!",
                date: new Date()
            },
        ]
    }

    // methods

    // add a new comment updating the state
    addComment(){
        let new_coment  = {
            name: "Marcus2",
            email: "marcus2@outlook.com",
            message: "Olá, mundo!2",
            date: new Date()
        }

        this.setState({comments:[...this.state.comments, new_coment]})
    }

    // add a new comment from the form
    addCommentFromForm(){
        let name = document.getElementById("nameForm").value;
        let email = document.getElementById("emailForm").value;
        let message = document.getElementById("messageForm").value;
        let date = (new Date()).toString();
        let new_comment = {
            name: name,
            email: email,
            message: message,
            date: date
        };
        this.setState({comments:[...this.state.comments, new_comment]});

        // clear the values:
        document.getElementById("nameForm").value = null;
        document.getElementById("emailForm").value = null;
        document.getElementById("messageForm").value = null;
    }

    // return and jsx
    render(){
        return(
            <div>

                {/*Comments here*/}
                <div>
                   {
                     this.state.comments.map((item, index) => 
                        <Comment
                        key={index}
                        name={item.name}
                        email={item.email}
                        message={item.message}
                        date={item.date.toString()}
                        />
                    )
                   }
                </div>

                {/*Form here*/}
                <div>
                    <Form
                        data={ () => {this.addCommentFromForm()} }

                        send={() => this.addCommentFromForm()}
                    />
                  
                </div>
                

            </div>
        )
    }
}

export default Mainpage;