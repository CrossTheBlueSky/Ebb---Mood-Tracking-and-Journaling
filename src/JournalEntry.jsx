
function JournalEntry({page, mood, setShowNotes, deleteHandler}){

return(
    <div className="flex flex-col bg-secondary">
    <div className="grid grid-rows-6 grid-cols-4 grid-flow-col gap-4 h-5/6 mx-10 my-0">
        <div className="col-span-4 row-span-1 place-self-center">
            <button className="btn btn-xs">◀</button><strong>{page.date}</strong><button className="btn btn-xs">▶</button>
        </div>

        <div className="row-span-4 col-span-2">
            <h4>{page.title}</h4>
            <h5>{mood}<input type="color" disabled defaultValue={page.mood.color} /></h5>
            <p>{page.entry.text}</p>
        </div>
        <div className="row-span-1 col-span-2">
        <button className="btn btn-primary" type="btn" onClick={()=>setShowNotes(true)}>Notes</button>
        </div>
    
        <div className="row-span-5 col-span-2">
            <img src={page.image} className=" max-h-full"/>
        </div>
    </div>
    <div className="divider"></div>
    <button className="btn" onClick={()=>document.getElementById('sanity-check').showModal()}>Delete Entry</button>
        <dialog id="sanity-check" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Are you sure?</h3>
            <div className="modal-action">
            <form method="dialog">
                <button onClick={()=>{deleteHandler(page.id)}} className="btn">Yes</button>
                <button className="btn">No</button>
            </form>
            </div>
        </div>
        </dialog>
    </div> 
    
)
}

export default JournalEntry