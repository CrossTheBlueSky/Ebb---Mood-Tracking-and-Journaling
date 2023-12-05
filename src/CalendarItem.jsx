import React from "react"
import Calendar from "react-calendar"
import {useLinkClickHandler, useNavigate} from "react-router-dom";
import $ from "jquery"

function CalendarItem(){
    const navigate = useNavigate()
    const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthArr = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]
    

    function clickHandler(date){
        const currentDate = {
            day : dayArr[date.getDay()],
            date: date.getDate(),
            month : monthArr[date.getMonth()],
            year : date.getYear()+1900
        }

        const dateString = `${currentDate.month} ${currentDate.date}, ${currentDate.year}`
        const cell = $(`[aria-label="${dateString}"]`).parent()
        cell.css("background-color", "red")
        // innerHTML="<abbr aria-label="${dateString}">${currentDate.date}</abbr>
        
        

    }

    return <Calendar onClickDay={(e)=>clickHandler(e)} />
}

export default CalendarItem