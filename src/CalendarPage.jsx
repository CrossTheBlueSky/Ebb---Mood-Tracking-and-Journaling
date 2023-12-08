import React from "react"
import CalendarItem from "./CalendarItem"
import {useLocation} from "react-router-dom"
import Nav from "./Nav"

function CalendarPage(){
    const location = useLocation()
    // const [userData, setUserData] = React.useState(location.state.userData)
    const [userName, setUserName] = React.useState(location.state.userData.name)


    
           return (
            <>
            <Nav user={userName}/>
            {location.state.userData.entryArr !== undefined ?  <CalendarItem entries={location.state.userData.entryArr} userData={location.state.userData}/>
            : <span>Loading Calendar...</span>}
            </>
            )


 
}

export default CalendarPage