import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { retriveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

export function WelcomeComponent() {

    const { username } = useParams();

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldRestApi() {
        console.log("Called")

        retriveHelloWorldPathVariable('John', authContext.token)
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally ( () => console.log('cleanup') )
    }

    function successfulResponse(response) {
        console.log(response)
        //setMessage(response.data)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos - <Link to='/todos'>Click Here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
            <div className='text-info'>
                {message}
            </div>
        </div>
    );
}
