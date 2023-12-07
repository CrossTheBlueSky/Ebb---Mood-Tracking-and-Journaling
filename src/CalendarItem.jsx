import React from "react"
import Calendar from "react-calendar"
import {useLinkClickHandler, useNavigate} from "react-router-dom";
import $ from "jquery"

function CalendarItem({entryArr}){
    const navigate = useNavigate()
    const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthArr = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]
    
    entryArr.forEach((entry)=>{
        classMaker(entry.mood.color, entry.mood)
    })

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
        const currentEntry = entryArr.filter((entry)=>{
            return entry.id === currentId
        })

        
        navigate(`/journal`, {state: {currentEntry : currentEntry, date: currentDate}})

    }

    // const datePath = `${currentDate.month}${currentDate.date}${currentDate.year}`

    // navigate(`/journal`)


        // This is where I figured out how to grab cells to change their colors. DON'T LOSE IT
        // const dateString = `${currentDate.month} ${currentDate.date}, ${currentDate.year}`
        // console.log(dateString)
        // console.log(entryArr[0].date)
        // const cell = $(`[aria-label="${dateString}"]`).parent()
        // cell.css("background-color", `${color}`)    
        


    return <Calendar tileClassName={({date, view})=>{

        const currentDate = {
            day : dayArr[date.getDay()],
            date: date.getDate(),
            month : monthArr[date.getMonth()],
            year : date.getYear()+1900
        }
        const dateString = `${currentDate.month} ${currentDate.date}, ${currentDate.year}`
        let newClass = ""
        entryArr.forEach((entry)=>{

            if(entry.date === dateString && view === "month"){
                newClass = `${entry.mood.name}`
            }
        })

        return newClass



    }} onClickDay={(e)=>{navigateHandler(e)}} />
}

export default CalendarItem