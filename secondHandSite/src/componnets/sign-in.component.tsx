import { useContext } from "react"
import { UserContext } from "../context/user.context"
import { useNavigate } from 'react-router-dom';

export const SignIn=()=>{

    const navigate = useNavigate()
    const userContext=useContext(UserContext);

    const Login=(event)=>{
        debugger;
        const password=event.target.password.value;
        const user=userContext.users.find(user=>user.password==password);
        if(user){
            userContext.setCurrentUser(user);
            navigate('/products');
        }
        else
            alert("wrong password! try again");
    }
    return (
    <div>
        <h2>Sign-In:</h2>
        <form onSubmit={Login}>
            <input type="password" placeholder="your password" name="password"></input>
            <button type="submit">sign-in</button>
        </form>
    </div>
    )
}