import React from "react"
import LoginCard from "./LoginCard"

function Home({appData}){
    console.log(appData)

    return(
        <div style={{width: "100vw", height: "100vh", backgroundImage: 'url("../public/writingdesk.jpg")', backgroundSize: "cover"}}>
        <LoginCard appData={appData}/>   
        </div>
    )

}

export default Home