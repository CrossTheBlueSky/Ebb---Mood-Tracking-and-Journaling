import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import Home from "./Home.jsx"
import CalendarPage from "./CalendarPage.jsx"
import JournalPage from './JournalPage.jsx';

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
    <CalendarPage />
    </div>
  },
  {path: "preferences",
element:(
  <div>
    <p>Preference Widget goes here Eventually</p>
    <Link to="/calendar">Back to Calendar</Link>
  </div>
)},
{path: "journal",
element: (
  <JournalPage />
)}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
