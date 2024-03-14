import { useNavigate } from "react-router-dom";
import { setUser } from "../data/user";

export const Login = () => {

    const navigate = useNavigate();
    const login = (event) => {
        event.preventDefault();
        const user = {
            userName: event.target.userName.value,
        }
        setUser(user);
        navigate('/');
    }

    return <div>
        <h1> login: </h1>
        <form name="user" onSubmit={login}>
            <input type="text" name="userName" /> <br />
            <button type="submit">login</button>
        </form>
    </div>
}