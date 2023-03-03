import { ChangeEvent, FormEvent } from "react";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerService } from "../../services/auth.service";
import { IUser } from "../../model/user.model";

const Register = () => {
  const [inputs, setInputs] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const {status} = await registerService(inputs);
      if(status === 201) {
        // alert("You have been registered successfully.")
        navigate("/login");
      }
    } catch (error: any) {
      setError(error.response.data)
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          required
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)}
          placeholder="Username"
          name="username"
        />
        <input
          required
          type="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)}
          placeholder="Email"
          name="email"
        />
        <input
          required
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInputs(e)}
          placeholder="Password"
          name="password"
        />
        <button>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
