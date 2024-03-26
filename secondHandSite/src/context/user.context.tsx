import { createContext } from 'react';
import { User } from '../interfaces/user.interface';

export type userContext = {
    currentUser?: User,
    setCurrentUser: Function,
    users:User[],
    addUser:Function
}
export const UserContext = createContext<userContext>({});