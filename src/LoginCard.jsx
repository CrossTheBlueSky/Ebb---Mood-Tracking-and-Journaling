import React from "react"
import {useNavigate} from "react-router-dom"

function LoginCard(){
    const navigate = useNavigate()

    return(
        <div>Home Box goes here
            <select defaultValue="" onChange={(e)=>navigate(`calendar/`, {state : e.target.value})}>
                <option value="" disabled>Choose User</option>
                <option value="0">Claire Devereaux</option>
                <option value="1">Alex Caldwell</option>
            </select>
            <p>Add User Goes Here</p>
            <p>Password Goes here</p>
        </div>
    )

}

export default LoginCard