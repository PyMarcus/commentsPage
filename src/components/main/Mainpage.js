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
                    <Form/>
                    <button onClick={() => this.addComment()}>dsa</button>
                </div>
                

            </div>
        )
    }
}

export default Mainpage;