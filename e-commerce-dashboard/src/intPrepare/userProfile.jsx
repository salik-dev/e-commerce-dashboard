import React, { useContext } from "react";
import { UserContext } from "./userProvider";

const UserProfile = () => {
    const { user, setUser } = useContext(UserContext);

    const handleUpdate = () => {
        setUser({ ...user, name: "bahadur ali" })
    }
    return (
        <>
            <h1>user profile</h1>
            <div>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
            </div>
            <button onClick={handleUpdate}>change name</button>
        </>
    )
}

export default UserProfile
