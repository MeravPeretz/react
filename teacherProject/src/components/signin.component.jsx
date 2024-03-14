import { useNavigate } from "react-router-dom";
import { setUser } from "../data/user";

export const SignIn = () => {

    const navigate = useNavigate();
    const siginin = (event) => {
        event.preventDefault();
        const user = {
            userName: event.target.userName.value,
        }
        setUser(user);
        navigate('/');
    }

    return <div>
        <h1> Here you can  sign in </h1>
        <form name="user" onSubmit={siginin}>
            <input type="text" name="userName" /> <br />
            <button type="submit">login</button>
        </form>
    </div>
}