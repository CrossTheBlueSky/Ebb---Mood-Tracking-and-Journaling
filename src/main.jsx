import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Home from "./Home.jsx"
import CalendarPage from "./CalendarPage.jsx"
import JournalPage from './JournalPage.jsx';
import Customize from "./Customize.jsx"
import Nav from "./Nav.jsx"

function getData(){
  fetch("http://localhost:3000/users")
  .then(r=>r.json())
  .then(data=>{
    
    createRoute(data)
  })
}
getData()

function createRoute(appData){


const router = createBrowserRouter([

  {
    path:"/",
    element:(
      <div>
         <Home appData={appData}/>
      </div>
    )
  },
  {
    path: "calendar",
    element:(<>
    <div id="calendar-container">
      <CalendarPage />
    </div>
    </>)
  },
  {path: "/customize",
element:(
  <div>
    <Customize />
  </div>
)},
{path: "/journal",
element: (
  <>

  <JournalPage />
  </>
)}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>

  </RouterProvider> 
);

}