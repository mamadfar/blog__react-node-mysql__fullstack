import {ChangeEvent, FormEvent, useState} from "react";
import "./Auth.scss";
import {Link, useNavigate} from "react-router-dom";
import {IUser} from "../../model/user.model";
import {useAuth} from "../../hooks/useAuth";

const Login = () => {
    const [inputs, setInputs] = useState<Omit<IUser, "email">>({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const status = await login(inputs);
            if (status === 200) {
                navigate("/", {replace: true});
            }
        } catch (error: any) {
            setError(error.response.data)
        }
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)} type="text"
                       placeholder="Username" name="username"/>
                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)} type="password"
                       placeholder="Password" name="password"/>
                <button>Login</button>
                {error && <p>{error}</p>}
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login
