import React from "react"
import Calendar from "react-calendar"
import {useNavigate} from "react-router-dom";

function CalendarItem({entries, userData}){
    const navigate = useNavigate()
    const dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthArr = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"]
    let colorObj= {}
    React.useEffect(()=>{
        entries.forEach((entry)=>{
            classMaker(entry.mood.color, entry.mood)
        })
    }, [])

    function classChecker(className_){
        
        const styleSheets = window.document.styleSheets;
        const styleSheetsLength = styleSheets.length;
        for(let i = 0; i < styleSheetsLength; i++){
            let classes =  styleSheets[i].cssRules;
            if (!classes)
                continue;
            const classesLength = classes.length;
            for (let x = 0; x < classesLength; x++) {
                if (classes[x].selectorText == className_) {
                    let ret;
                    if(classes[x].cssText){
                        ret = classes[x].cssText;
                    } else {
                        ret = classes[x].style.cssText;
                    }
                    if(ret.indexOf(classes[x].selectorText) == -1){
                        ret = classes[x].selectorText + "{" + ret + "}";
                    }
                    return true
                }
            }
        }
        return false
    }

    function classMaker(color, mood){
        const newMood = mood.name.toLowerCase().replace(/\s+/g, '')
        if(classChecker(`.${newMood}`) === false){

            const style = document.createElement("style")
            style.innerHTML = `.${newMood} { background-color: ${color}; }`
            document.getElementsByTagName('head')[0].appendChild(style)
            colorObj[newMood] = color

        }
        else(console.log("mood already exists"))

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
        const moodKey = currentEntry[0].mood.name.toLowerCase().replace(/\s+/g, '')

        currentEntry[0].mood.color = colorObj[moodKey] || currentEntry[0].mood.color

        
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
                
                newClass = `${entry.mood.name.toLowerCase().replace(/\s+/g, '')}`
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