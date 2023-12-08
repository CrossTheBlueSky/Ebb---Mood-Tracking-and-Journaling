function NoteCard(props){

    function clickHandler(){
        props.deleteHandler(props.date)
    }

    return(
        <div className="border-solid border-2 row-span-1 col-span-1  h-1/3">
        <div className="flex flex-col mx-25 place-self-center">
        <h2 className="text-xl"><strong>{props.date}</strong></h2>
        <p>{props.text}</p>
        <button onClick={clickHandler} className="btn btn-primary btn-xs w-1/4 place-self-center">Delete Note</button>
        <br />
        </div>
        </div>
    )

}

export default NoteCard