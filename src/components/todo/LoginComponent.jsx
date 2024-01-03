import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginComponent() {

    const [username, setUsername] = useState('admin');

    const [password, setPassword] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const navigate = useNavigate();


    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit() {
        if (username === 'admin' && password === 'admin123') {
            setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`);
        } else {
            setShowErrorMessage(true);
            setShowSuccessMessage(false);
        }
    }

    return (
        <div className="LoginComponent">
            <h1>Time to Login!</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>}
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed. Please check your credentials</div>}

            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username"
                        value={username} onChange={handleUsernameChange}>
                    </input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"
                        value={password} onChange={handlePasswordChange}>
                    </input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}
