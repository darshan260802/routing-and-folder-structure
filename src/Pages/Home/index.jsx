import { Link } from "react-router-dom"
import './/home.css'

const Home = () => {
    return(
        <div className="home-container">
            <h1>Welcome To My APP</h1>
            <h2>You are on Home Page</h2>
            <h3>Click <Link to={'/login'}><a>here</a></Link> To Go Back To Login Page</h3>
        </div>
    )
}

export default Home