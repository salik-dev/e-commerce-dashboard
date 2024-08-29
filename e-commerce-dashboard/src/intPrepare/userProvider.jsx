import React, { createContext, useState } from "react";

// create a context object
const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "salik", age: 24 });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
export { UserContext };
