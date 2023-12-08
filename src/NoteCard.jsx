import React from "react"

function NoteCard(props){

    return(
        <div className="mx-25">
        <h3>{props.date}</h3>
        <p>{props.text}</p>
        <br />
        </div>
    )

}

export default NoteCard