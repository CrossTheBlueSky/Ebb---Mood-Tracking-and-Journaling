import React from "react"
import {useNavigate} from "react-router-dom"

function Nav(user){

  const navigate = useNavigate()
    return(

      <div className="navbar bg-base-100">
      <a className="btn btn-ghost text-xl">{user.user}</a>
      <a className="btn btn-ghost text-x1" onClick={()=>navigate("/customize")}>Customize</a>
      <a className="btn btn-ghost text-x1" onClick={()=>navigate("/")}>Logout</a>
      </div>
        
    )
}

export default Nav