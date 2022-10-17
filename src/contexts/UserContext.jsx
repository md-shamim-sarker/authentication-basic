import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [count, setCount] = useState(0);
    const myName = "Shamim Sarker";
    const myArray = [1, 2, 3];
    const myObject = {yourName: "Snigdha Sarker"};
    const myFunction = (name) => {
        return `Hello ${name}`;
    };
    const countHandler = () => {
        return setCount(count + 1);
    };
    const authInfo = {myName, myArray, myObject, myFunction, count, setCount, countHandler};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;