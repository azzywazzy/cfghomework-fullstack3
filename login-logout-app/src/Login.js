import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


function Login(props) {
  const { setLoggedIn } = props;

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleFormChange = (event) => {
    event.preventDefault();
    const {name, value} = event.currentTarget
    if (name === "username") {
      setUsername(value)
    }
    if (name === "password") {
      setPassword(value)
    }
  }



  const submitLogin = (event) => {
    event.preventDefault();
    if (username === "hello@email.com" && password === "password1234") {
      setLoggedIn(true)
      navigate('/login-successful')
    }
    else {
      setLoggedIn(false)    
      navigate('/login-unsuccessful')
    }

  }

  return (
    <div className="Login">
    <h1>Login</h1>
    <form onSubmit={ (event) => submitLogin(event) }>
      <div className="text_area">
        <input
          onChange={ (event) => handleFormChange(event)}
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          className="text_input"

        />
      </div>
      <br></br>
      <div className="text_area">
        <input
          onChange={ (event) => handleFormChange(event)}
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="text_input"

        />
      </div>
      <br></br>
      <input
        type="submit"
        value="Login"
        className="btn-login"

      />
    </form>
  </div>
  );
}

export default Login;
