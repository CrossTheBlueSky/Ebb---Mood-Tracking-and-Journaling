import React from "react"
import CalendarItem from "./CalendarItem"
import {useLocation} from "react-router-dom"
import { data } from "jquery"

function CalendarPage(){
    const location = useLocation()
    const userId = parseInt(location.state)
    const [userData, setUserData] = React.useState({})

    React.useEffect(getData, [])

     function getData(){
     fetch(`http://localhost:3000/users/${userId}`)
     .then(r=>r.json())
     .then(data=>{
        setUserData(data)
         })

    }


    
           return userData.entryArr !== undefined ?  <CalendarItem entryArr={userData.entryArr}/> 
            : <span>Loading Calendar...</span>


 
}

export default CalendarPage