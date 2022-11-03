import type { FC, Dispatch, SetStateAction } from "react";
import type { User } from "../interfaces";

import { useState } from "react";

import createGenericContext from "./create-generic-context";

interface UserContext {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

const [useUserContext, UserProvider] = createGenericContext<UserContext>();

const UserContextProvider: FC<{children: JSX.Element | JSX.Element[]}> = ({ children }) => {
    const [user, setUser] = useState<User>({ name: "", email: "" });

    return (
        <UserProvider value={{ user: user, setUser: setUser }}>
            {children}
        </UserProvider>
    )
}

export { useUserContext, UserContextProvider };