import React from "react";


// this component generate a form in the main page with data fill up for by user.
// How props, it receive the function of send
const Form = (props) => {
    return(
        <form method="post">
            <h2>Adicionar comentário</h2>
            <input type="text" placeholder="name"></input>
            <input type="text" placeholder="email"></input>
            <textarea type="textarea" placeholder="message"></textarea>
            <button type="button">Send</button>
        </form>
    )
}

export default Form;