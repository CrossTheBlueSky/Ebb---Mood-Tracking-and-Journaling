import React from "react"
import CalendarItem from "./CalendarItem"
import {useLocation} from "react-router-dom"
import { data } from "jquery"
import Nav from "./Nav"

function CalendarPage(){
    const location = useLocation()
    const [userData, setUserData] = React.useState(location.state.data)
    console.log(userData)



    
           return (
            <>
            <Nav user={userData.name}/>
            {userData.entryArr !== undefined ?  <CalendarItem entryArr={userData.entryArr}/>
            : <span>Loading Calendar...</span>}
            </>
            )


 
}

export default CalendarPage