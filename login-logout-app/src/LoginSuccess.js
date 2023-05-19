// import './App.css';
import { useNavigate } from 'react-router-dom';

function LoginSuccess(props) {
    const navigate = useNavigate();
    // const signOutClick = () => navigate('/')
    const { setLoggedIn } = props;

    const handleSignOut = () => {
        setLoggedIn(false)
        navigate('/')
    }


  return (
    <div className="LoginSuccess">
        <h1>Welcome! You are successfully logged in!</h1>
        <p>Click here to sign out</p>
        <button className="btn-success" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default LoginSuccess;
