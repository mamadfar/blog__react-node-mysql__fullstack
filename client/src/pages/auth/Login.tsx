import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import "./Auth.scss";
import {Link, useNavigate} from "react-router-dom";
import { IUser } from "../../model/user.model";
// import { loginService } from "../../services/auth.service";
import {useAuth} from "../../hooks/useAuth";

const Login = () => {
    const [inputs, setInputs] = useState<Omit<IUser, "email">>({
        username: "",
        password: ""
      });
      const [error, setError] = useState("");
      const navigate = useNavigate();
      const {login, user, logout} = useAuth();

      const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
          login(inputs);
          // if(status === 200) {
          //   navigate("/");
          // }
        } catch (error: any) {
          setError(error.response.data)
        }
      };
      // useEffect(() => {
      //     console.log(user)
      // }, [user])

    return (
        <div className="auth">
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)} type="text" placeholder="Username" name="username"/>
                <input required onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)} type="password" placeholder="Password" name="password"/>
                <button>Login</button>
                {error && <p>{error}</p>}
                <span>Don't you have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login
