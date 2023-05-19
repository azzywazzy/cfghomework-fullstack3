// import './App.css';
import { useNavigate } from 'react-router-dom';

function LoginFail(props) {
    const navigate = useNavigate();
    // const backToLoginClick = () => navigate('/')
    const { loggedIn, setLoggedIn } = props;

    const handleSignOut = () => {
        setLoggedIn(false)
        navigate('/')
    }


  return (
    <div className="LoginFail">
        <h1>Login unsuccessful, please try again.</h1>
        <p>Click here to go back to the login page</p>
        <button className="btn-fail" onClick={handleSignOut}>Back To Login Page</button>
    </div>
  );
}

export default LoginFail;
