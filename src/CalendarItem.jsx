import React from "react"
import Calendar from "react-calendar"
import {useNavigate, useLocation} from "react-router-dom";

function CalendarItem({entries, userData}){
    const navigate = useNavigate()
    const location = useLocation()
    const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthArr = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]
    React.useEffect(()=>{
        entries.forEach((entry)=>{
            classMaker(entry.mood.color, entry.mood)
        })
    }, [])


    console.log(entries)
    

    

    function classMaker(color, mood){
        const style = document.createElement("style")
        style.innerHTML = `.${mood.name} { background-color: ${color}; }`
        document.getElementsByTagName('head')[0].appendChild(style)

    }
 
    function navigateHandler(date){
        const currentDate = {
            day : dayArr[date.getDay()],
            date: date.getDate(),
            month : monthArr[date.getMonth()],
            year : date.getYear()+1900
        }
        const currentId = `${currentDate.month}${currentDate.date}${currentDate.year}`
        const currentEntry = entries.filter((entry)=>{
            return entry.id === currentId
        })

        
        navigate(`/journal`, {state: {currentEntry : currentEntry, date: currentDate, userData: userData}})

    }
    

    return <Calendar tileClassName={({date, view})=>{
    
        const currentDate = {
            day : dayArr[date.getDay()],
            date: date.getDate(),
            month : monthArr[date.getMonth()],
            year : date.getYear()+1900
        }
        const dateString = `${currentDate.month}${currentDate.date}${currentDate.year}`
        let newClass = ""
        entries.forEach((entry)=>{
            if(entry.id === dateString && view === "month"){
                newClass = `${entry.mood.name}`
            }
        })

        return newClass



    }} onClickDay={(e)=>{navigateHandler(e)}} />
}

export default CalendarItem

  // const datePath = `${currentDate.month}${currentDate.date}${currentDate.year}`

    // navigate(`/journal`)


        // This is where I figured out how to grab cells to change their colors. DON'T LOSE IT
        // const dateString = `${currentDate.month} ${currentDate.date}, ${currentDate.year}`
        // console.log(dateString)
        // console.log(entryArr[0].date)
        // const cell = $(`[aria-label="${dateString}"]`).parent()
        // cell.css("background-color", `${color}`)    