import React from "react"
import {useLocation, useNavigate} from "react-router-dom"
import NoteCard from "./NoteCard"
import NewEntry from "./NewEntry"

function JournalPage(){
    
    const [showNotes, setShowNotes] = React.useState(false)
    const [hasEntry, setHasEntry] = React.useState(false)
    const [currentEntry, setCurrentEntry] = React.useState(null)
    const navigate= useNavigate()
    const location = useLocation()

    function submitHandler(e){
        e.preventDefault()
        const entryObj = {
                id: e.target.date.value.replace(/\s+/g, ''),
                date: "February 1, 2023",
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
    }

    if(location.state.currentEntry[0] !== undefined && hasEntry === false){
        setHasEntry(true)
        setCurrentEntry(location.state.currentEntry[0])
    }
    if(hasEntry){
    const page = currentEntry
    const mood = page.mood.name.charAt(0).toUpperCase() + page.mood.name.toLowerCase().slice(1)


    const allNotes = page.entry.notes.map((note)=>{
        return (
            <NoteCard key={JSON.stringify(note.date)} date={note.date} text={note.text} />
        )
    })



    return(
        <div>
            <button onClick={()=>navigate(-1, {state: location.state})}>Back to Calendar</button>
        <div>
            {showNotes ? <>
            {allNotes}
            <button type="btn" onClick={()=>{setShowNotes(false)}}>Back to Entry</button>
            </>
             :             <>
             <button>◀</button><h3>{page.date}</h3><button>▶</button>
             <h4>{page.title}</h4>
             <h5>{mood}<input type="color" /></h5>
             <p>{page.entry.text}</p>
             <button type="btn" onClick={()=>setShowNotes(true)}>Notes</button>
             </> }
        </div>
        <img src={page.image} />
        </div>
    )
            }else{

                const date = location.state.date



                return(

                    <NewEntry date={date} submitHandler={submitHandler}/>
                //     <div className="flex items-center">
                //     <form onSubmit={submitHandler}>
                //         <label htmlFor="date">Date</label>
                //         <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} name="date" readOnly type="text" value={`${date.month} ${date.date} ${date.year}`}></input>

                //         <label htmlFor="title">Title</label>
                //         <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} type="text" name="title"></input>

                //         <label htmlFor="mood">Mood</label>
                //         <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} type="text" name="mood"></input>

                //         <div className="container">
                //         <label htmlFor="color">Color</label>
                //         <input className="w-full" style={{display: "block"}} type="color" name="color"></input>
                //         </div>

                //         <label htmlFor="image">Image url</label>
                //         <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} type="text" name="image"></input>

                //         <label htmlFor="journal">Entry</label>
                //         <textarea style={{display: "block"}} className="textarea textarea-primary w-full" name="journal" placeholder="Entry"></textarea>

                //         <button type="submit" className="btn btn-accent">Create</button>
                //     </form>
                // </div>
                // )
                )
            }

}

export default JournalPage