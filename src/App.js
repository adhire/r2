import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from "./components/profile/profile.component";
import EditProfile from "./components/edit-profile/edit-profile.component";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/profile/'>Profile</Link>
            </li>
            <li>
              <Link to='/edit/'>Edit</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={Profile} />
        <Route path='/profile/' component={Profile} />
        <Route path='/edit/' component={EditProfile} />
      </div>
    </Router>
  );
}

export default App;
