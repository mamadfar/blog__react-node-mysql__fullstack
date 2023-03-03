import "./Footer.scss";
import logo from "../assets/img/logo.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <img src={logo} alt="logo"/>
                <span>Made with ❤ and <b>React</b></span>
            </div>
        </footer>
    )
}

export default Footer
