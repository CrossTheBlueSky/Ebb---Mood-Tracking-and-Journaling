import NoteCard from "./NoteCard"
function NotePage({image, notes, setShowNotes}){

    const allNotes = notes.map((note)=>{

        return (
            <NoteCard key={note.date} date={note.date} text={note.text} />
        )
    })

    function submitHandler(e){
        e.preventDefault()
        document.getElementById('add-note').close()
        console.log(e)
    }

    
    return(
        <>
        <button type="btn" onClick={()=>setShowNotes(false)}>Back to Journal</button>
        <div className="grid grid-cols-2 gap-8 m-5">
            <div className="col-span-1">
             {notes.length > 0 && allNotes} 
            </div>
            <div className="col-span-1">
               <img src={image}></img>
            </div>
        </div>
        <button className="btn" onClick={()=>document.getElementById('add-note').showModal()}>Add Note</button>
        <dialog id="add-note" className="modal">
          <div className="modal-box grid grid-cols-1 w-fit">
            <div className="modal-action place-self-center">
            <form method="dialog" >
                <div>
                <label htmlFor="date">Date</label>
                <br />
                <input  type="text" name="date"></input>
                </div>
                <div>
                <textarea className="textarea textarea-primary textarea-md" placeholder="Note"></textarea>
                </div>
                <button className="btn btn-primary" onClick={submitHandler}>Add Note</button>
                <button className="btn btn-primary" value="cancel" formMethod="dialog" onClick={()=>document.getElementById('add-note').close()}>Cancel</button>
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
        </>
    )
}

export default NotePage