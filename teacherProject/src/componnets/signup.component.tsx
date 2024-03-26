import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/user.context";
import { User } from "../interfaces/user.interface";

export const SignUp = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate()

    const addUser = (event) => {
        event.preventDefault();
        const user: User = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            id: event.target.idNumber.value,
        }
        userContext.setUser(user);
        navigate('/');
    }
    return  <div>
        <h4>Enter new user Details</h4>
        <form onSubmit={addUser}>
            <input type="text" placeholder="first name" name="firstName" /> <br />
            <input type="text" placeholder="last name" name="lastName" /> <br />
            <input type="text" placeholder="id number" name="idNumber" /> <br />
            <button type="submit">Save</button>
        </form>
    </div>
}