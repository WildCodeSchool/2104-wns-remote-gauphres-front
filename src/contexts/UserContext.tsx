import { gql, useQuery } from '@apollo/client';
import React, { createContext, useState, Dispatch, useEffect, FC } from 'react';

export type User = {
    id: string;
    userName: string;
    firstname: string;
    lastname: string;
    password: string;
    avatar: string;
    isConnected: boolean;
    email: string;
    birthDate: Date;
    hobbies: string[];
};

export const UserContext = createContext<
    [User | undefined, Dispatch<User>] | null
>(null);

const FIND_USER = gql`
    query getUserByEmail($email: String!) {
        getUserByEmail(email: $email) {
            id
            userName
            firstname
            lastname
            password
            chatrooms {
                title
            }
            avatar
            isConnected
            email
            birthDate
        }
    }
`;

export const UserProvider: FC = ({ children }) => {
    const email = 'userEmail@email.com';
    const { loading, error: queryError, data } = useQuery(FIND_USER, {
        variables: { email },
    });
    const [user, setUser] = useState<User>();

    useEffect(() => {
        setUser(data?.getUserByEmail);
    }, [data]);

    console.log(user);
    // TEMPORARY fake user initialization
    // useEffect(() => {
    //     setUser({
    //         id: 'my_id',
    //         userName: 'Me',
    //     });
    // }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};
