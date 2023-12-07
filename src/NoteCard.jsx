import React from "react"

function NoteCard(props){

    return(
        <>
        <h3>{props.date}</h3>
        <p>{props.text}</p>
        <br />
        </>
    )

}

export default NoteCard