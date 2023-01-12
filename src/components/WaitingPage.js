import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="landing-page">
            <Link to="/ingame">Play Game</Link>
        </div>
    );
}

export default Home;