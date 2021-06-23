import { gql, useQuery } from '@apollo/client';
import React, { createContext, useState, Dispatch, useEffect, FC } from 'react';

export type UserMood = {
    title: string;
    image: string;
};

export type User = {
    id: string;
    userName: string;
    firstname: string;
    lastname: string;
    password: string;
    avatar: string;
    isConnected: boolean;
    email: string;
    birthDate: string;
    userMood?: UserMood;
};

export const UserContext = createContext<
    [User | undefined, Dispatch<User>] | null
>(null);

const FIND_USER = gql`
    query getUserByEmail($email: String!) {
        getUserByEmail(email: $email) {
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
            userMood {
                title
                image
            }
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
        setUser(data && data.getUserByEmail);
    }, [data]);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};
