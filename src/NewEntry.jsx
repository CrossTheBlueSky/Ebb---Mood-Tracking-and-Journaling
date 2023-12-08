

function NewEntry({date, submitHandler}){

    
return(
    <div className="flex items-center">
    <form onSubmit={submitHandler}>
        <label htmlFor="date">Date</label>
        <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} name="date" readOnly type="text" value={`${date.month} ${date.date} ${date.year}`}></input>

        <label htmlFor="title">Title</label>
        <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} type="text" name="title"></input>

        <label htmlFor="mood">Mood</label>
        <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} type="text" name="mood"></input>

        <div className="container">
        <label htmlFor="color">Color</label>
        <input className="w-full" style={{display: "block"}} type="color" name="color"></input>
        </div>

        <label htmlFor="image">Image url</label>
        <input className="input input-bordered input-primary w-full max-w-xs" style={{display: "block"}} type="text" name="image"></input>

        <label htmlFor="journal">Entry</label>
        <textarea style={{display: "block"}} className="textarea textarea-primary w-full" name="journal" placeholder="Entry"></textarea>

        <button type="submit" className="btn btn-accent">Create</button>
    </form>
</div>)
}

export default NewEntry