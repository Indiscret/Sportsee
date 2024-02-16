import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1 className="home_title">Choisissez un Utilisateur : </h1>
            <ul className="home_list">
                <li className="home_link"><Link to="/user/12">Karl</Link></li>
                <li className="home_link"><Link to="/user/18">Cécilia</Link></li>
            </ul>
        </div>
    )
}

export default Home