import { gql, useQuery } from '@apollo/client';
import React, { createContext, useState } from 'react';

const UserContext = createContext(null);

const FIND_USER = gql`
    query getUser($id: ID!) {
        getUser(id: $id) {
            firstName
            lastName
        }
    }
`;

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const id = 1;
    const { loading, error: queryError, data } = useQuery(FIND_USER, {
        variables: { id },
    });
    if (data) {
        setUser(data);
    }
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
