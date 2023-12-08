import React from "react"
import NoteCard from "./NoteCard"

function NotePage({image, notes, setShowNotes, userData, page}){

    const [noteArr, setNoteArr] = React.useState(notes)
    const allNotes = noteArr.map((note)=>{

        return (
            <NoteCard key={note.date} date={note.date} text={note.text} deleteHandler={deleteHandler} />
        )
    })

    function submitHandler(e){
        e.preventDefault()

        const noteObj = {
            date: e.target.date.value,
            text: e.target["note-text"].value
        }

        const entryIndex= userData.entryArr.findIndex((entry)=> entry.id === page.id)
        // userData.entryArr[entryIndex].entry.notes.push(noteObj)
        userData.entryArr[entryIndex].entry.notes.push(noteObj)
        const newArr = []
        userData.entryArr[entryIndex].entry.notes.forEach((note)=>newArr.push(note))
        setNoteArr(newArr)
        fetch(`http://localhost:3000/users/${userData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData)
        })
        document.getElementById('note-form').reset()
        document.getElementById('add-note').close()

    }

    function deleteHandler(date){
        console.log(date)
        const entryIndex= userData.entryArr.findIndex((entry)=> entry.id === page.id)
        const newArr = []
        userData.entryArr[entryIndex].entry.notes.forEach((note)=>{
            if(note.date !== date){
                newArr.push(note)
            }
        })
        userData.entryArr[entryIndex].entry.notes = newArr
        setNoteArr(newArr)
        fetch(`http://localhost:3000/users/${userData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData)
        })
    }

    
    return(
        <div className="h-100vh flex flex-col">
        <button type="btn" onClick={()=>setShowNotes(false)}>Back to Journal</button>
        <div className="grid grid-cols-2 gap-8 m-5 h-100vh">
            <div className="flex-1 flex overflow-hidden">
            <div className="col-span-1 flex-1 overflow-y-scroll">
             {notes.length > 0 && allNotes} 
            </div>
            </div>
            <div className="col-span-1">
               <img src={image}></img>
            </div>
        </div>
        <button className="btn" onClick={()=>document.getElementById('add-note').showModal()}>Add Note</button>
        <dialog id="add-note" className="modal">
          <div className="modal-box grid grid-cols-1 w-fit">
            <div className="modal-action place-self-center">
            <form id="note-form" method="dialog" onSubmit={submitHandler}>
                <div>
                <label htmlFor="date">Date</label>
                <br />
                <input  type="text" name="date"></input>
                </div>
                <div>
                <textarea className="textarea textarea-primary textarea-md" id="note-text" placeholder="Note"></textarea>
                </div>
                <button className="btn btn-primary" type="submit">Add Note</button>
                <div className="btn btn-primary" value="cancel" formMethod="dialog" onClick={()=>document.getElementById('add-note').close()}>Cancel</div>
            </form> 
            </div>
          </div>
        </dialog>
        
        {/* <form onSubmit={(e)=>{
            e.preventDefault()
            console.log("Attempted")}}>
            <label htmlFor="date">Date</label>
            <input type="text" name="date"></input>
            <label htmlFor="note">Note</label>
            <input type="text" name="note"></input>
            <button className="btn btn-primary" type="submit">Add Note</button>
        </form> */}
        </div>
    )
}

export default NotePage