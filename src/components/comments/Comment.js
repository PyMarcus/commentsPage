import React from "react";


// Comment component that has information how name, email, message, date
// this component receive the props from main page and render in the page
const Comment = (props) => {
    return (
        <div>
            <p>Nome: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Message: {props.message}</p>
            <p>Date: {props.date}</p>
        </div>
    )
}


export default Comment;