import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Home from "./Home.jsx"
import CalendarItem from "./CalendarItem.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
        <Link to="/calendar">Calendar</Link>
      </div>
    ),
  },
  {
    path: "calendar",
    element:<div>
    <Link to="/preferences">Preferences</Link>
    <CalendarItem />
    </div>
  },
  {path: "preferences",
element:(
  <div>
    <p>Preference Widget goes here Eventually</p>
    <Link to="/calendar">Back to Calendar</Link>
  </div>
)}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
