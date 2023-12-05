import React from "react"
import {useLocation} from "react-router-dom"

function JournalPage(){

    const location = useLocation()
    const entryId = location.state

    console.log(entryId)

    return(
        <div>
            <h3>Date goes here</h3>
            <h4>Title goes here</h4>
            <h5>Feeling:</h5><input type="color" />
        </div>
    )

}

export default JournalPage