import React from 'react';
import './index.css';
// import App from './App';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import LoginFail from './LoginFail';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {useState} from 'react';
import reportWebVitals from './reportWebVitals';


const Routing = () => {
  const [loggedIn, setLoggedIn] = useState(false) 


  
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/login-successful">Login Successful</Link>
            </li>
            <li>
              <Link to="/login-unsuccessful">Login Failed</Link>
            </li>
          </ul>
        </nav> */}
        <Routes> 
          <Route path="/" index element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path="/login-successful" element={<LoginSuccess setLoggedIn={setLoggedIn}/>} />
          <Route path="/login-unsuccessful" element={<LoginFail setLoggedIn={setLoggedIn}/>} />
        </Routes>
      </div>
    </Router>
  )
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
