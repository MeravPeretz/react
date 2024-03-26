import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import { UserContext, userContext } from "../context/user.context"

export const SignUp=()=>{

    const userContext = useContext(UserContext);
    const navigate = useNavigate()

    const AddUser = (event) => {
        debugger;
        const password = event.target.password.value;
        if (!userContext.users.find(user => user.password == password)) {
            const id=Math.max(...userContext.users.map(user => user.id));
            const user_to_Addition = {
                id: id? 0:id,
                name: event.target.name.value,
                password: password,
                email: event.target.email.value,
            }
            userContext.addUser(user_to_Addition);
            navigate('/sign-in');
        }
        else
            alert("wrong password try again!");
    }
    
    return (
        <div>
            <h2>Sign-Up:</h2>
            <form onSubmit={AddUser}>
                <input type="text" name="name" placeholder="name" required></input>
                <input type="text" name="password" placeholder="password" required></input>
                <input type="email" name="email" placeholder="email" required ></input>
                <button type="submit">sign-up</button>
            </form>
        </div>
    )

}