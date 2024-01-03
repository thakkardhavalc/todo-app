import { Link, useParams } from 'react-router-dom';

export function WelcomeComponent() {

    const { username } = useParams();

    console.log(username);

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage Your todos - <Link to='/todos'>Click Here</Link>
            </div>
        </div>
    );
}
