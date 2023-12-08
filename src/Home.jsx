import React from "react"
import LoginCard from "./LoginCard"

function Home({appData}){
    console.log(appData)

    return(
        <div style={{width: "85vw", height: "85vh", backgroundImage: 'url("../public/writingdesk.jpg")', backgroundSize: "cover"}}>
        <LoginCard appData={appData}/>   
        </div>
    )

}

export default Home