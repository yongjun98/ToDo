import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './screens/Login'
import Join from './screens/Join'
import ToDoList from './screens/ToDo/ToDoList'
import MyCalendar from './screens/Calendar'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/Home'}>
              Home
            </Link>
            <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Join'}>
                    Sign up
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Calendar'}>
                    Calendar
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to={'/To-DoList'}>
                    To-Do List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<MyCalendar />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Join" element={<Join />} />
              <Route epath="/Calendar" element={<MyCalendar />} />
              <Route path="/To-DoList" element={<ToDoList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App