import React from "react"
import {useNavigate, useLocation} from "react-router-dom"

function Nav(user){
  location = useLocation

  if(user === "Username"){
    user = location.state.user
  }

  console.log(user)
  const navigate = useNavigate()
    return(

      <div className="navbar bg-base-100">
      <a className="btn btn-ghost text-xl">{user.user}</a>
      {/* <a className="btn btn-ghost text-x1" onClick={()=>navigate("/customize", {state:{user:user}})}>Customize</a> */}
      <a className="btn btn-ghost text-x1" onClick={()=>navigate("/")}>Logout</a>
      </div>
        
    )
}

export default Nav