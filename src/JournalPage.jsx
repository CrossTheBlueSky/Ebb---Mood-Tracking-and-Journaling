import React from "react"
import {useLocation, useNavigate} from "react-router-dom"
import NewEntry from "./NewEntry"
import JournalEntry from "./JournalEntry"
import NotePage from "./NotePage"
function JournalPage(){
    
    const [showNotes, setShowNotes] = React.useState(false)
    const [hasEntry, setHasEntry] = React.useState(false)
    const [currentEntry, setCurrentEntry] = React.useState(null)
    const navigate= useNavigate()
    const location = useLocation()
    const userData = location.state.userData
    
    function submitHandler(e){
        e.preventDefault()
        const entryObj = {
                id: e.target.date.value.replace(/\s+/g, ''),
                date: e.target.date.value,
                mood: {
                    name: e.target.mood.value,
                    color: e.target.color.value
                        },
                title: e.target.title.value,
                image: e.target.image.value,
                entry: {
                    text:  e.target.journal.value,
                    notes: []

                    }
        }
        setCurrentEntry(entryObj)
        setHasEntry(true)
        userData.entryArr.push(entryObj)

        fetch(`http://localhost:3000/users/${userData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData)
        })
    }

    function deleteHandler(id){

        userData.entryArr = userData.entryArr.filter((entry)=> entry.id !== id)
        

        fetch(`http://localhost:3000/users/${userData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData)
        }).then(console.log(userData))
        .then(
           navigate("/calendar", {state: {userData : userData}})
        )

    }

    if(location.state.currentEntry[0] !== undefined && hasEntry === false){
        setHasEntry(true)
        setCurrentEntry(location.state.currentEntry[0])
    }
    if(hasEntry){
    const page = currentEntry
    const mood = page.mood.name.charAt(0).toUpperCase() + page.mood.name.toLowerCase().slice(1)


    return(
        <div className="mt-25 bg-secondary">
            {showNotes === false && <button className="btn btn-primary" onClick={()=>navigate("/calendar", {state: {userData: userData}})}>Back to Calendar</button>}
        <div>
            {showNotes ? <NotePage setShowNotes={setShowNotes} image={page.image} notes={page.entry.notes} />
             : <JournalEntry page={page} mood={mood} setShowNotes={setShowNotes} deleteHandler={deleteHandler}/>}
        </div>

        </div>
    )
            }else{

                const date = location.state.date

                    console.log(userData)

                return(<div className="mt-25 bg-secondary">
                    <button className="btn btn-primary" onClick={()=>navigate("/calendar", {state: {userData: userData}})}>Back to Calendar</button>
                    <NewEntry date={date} submitHandler={submitHandler}/>
                    </div>
                )
            }

}

export default JournalPage