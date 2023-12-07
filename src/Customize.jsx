import React from "react"
import { useNavigate } from "react-router-dom"
import Calendar from "react-calendar"
function Preferences(){
    const navigate = useNavigate()
    const [theme, setTheme] = React.useState()

    return(
        <>
        <button type="btn" onClick={()=>navigate(-1)}>Back to Calendar</button>
        <div className="grid grid-cols-3 grid-rows-3 align-center">
            <div className="col-span-1 col-start-2 row-start-2">
            <form style={{display:"table"}}>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}} htmlFor="Primary Color">Primary Color</label>
                    <input style={{display:"table-cell"}} type="color" name="Primary Color"></input>
                    </p>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}} htmlFor="Primary Content">Primary Content</label>
                    <input style={{display:"table-cell"}} type="color" name="Primary Content"></input>
                    </p>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}} htmlFor="Secondary Color">Secondary Color</label>
                    <input style={{display:"table-cell"}} type="color" name="Secondary Color"></input>
                    </p>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}} htmlFor="Secondary Content">Secondary Content</label>
                    <input style={{display:"table-cell"}} type="color" name="Secondary Content"></input>
                    </p>
                <p style={{display:"table-row"}}>   
                    <label style={{display:"table-cell"}} htmlFor="Accent">Accent Color</label>
                    <input style={{display:"table-cell"}} type="color" name="Accent"></input>
                    </p>
                <p style={{display:"table-row"}}>
                    <label style={{display:"table-cell"}} htmlFor="Accent Content">Accent Content</label>
                    <input style={{display:"table-cell"}} type="color" name="Accent Content"></input>
                </p>
            </form>
            </div>
            <div className="col-span-3 row-start-1">
                <div className="navbar bg-base-100">
                 <a className="btn btn-ghost text-xl">Username</a>
                 <a className="btn btn-ghost text-x1" >Customize</a>
                 <a className="btn btn-ghost text-x1" >Logout</a>
                </div>
                <div>
                    <Calendar />
                </div>
            </div>
        </div>
        </>
    )

}

export default Preferences