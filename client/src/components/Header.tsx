import "./Header.scss";
import logo from "../assets/img/logo.png";
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const Header = () => {
    const {user, logout} = useAuth();

    return (
        <header>
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <nav className="links">
                        <Link to="/?cat=art" className="link">
                            <h6>ART</h6>
                        </Link>
                        <Link to="/?cat=science" className="link">
                            <h6>SCIENCE</h6>
                        </Link>
                        <Link to="/?cat=technology" className="link">
                            <h6>TECHNOLOGY</h6>
                        </Link>
                        <Link to="/?cat=cinema" className="link">
                            <h6>CINEMA</h6>
                        </Link>
                        <Link to="/?cat=design" className="link">
                            <h6>DESIGN</h6>
                        </Link>
                        <Link to="/?cat=food" className="link">
                            <h6>FOOD</h6>
                        </Link>
                        <span>{user?.username}</span>
                        {user ? <span onClick={logout}>Logout</span> : <Link to="/login" className="link">Login</Link>}
                        <span className="write-link">
                            <Link to="/write" className="link">Write</Link>
                        </span>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
