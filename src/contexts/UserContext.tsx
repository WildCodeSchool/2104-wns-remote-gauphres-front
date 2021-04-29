import React, { createContext, useState, Dispatch, useEffect, FC } from 'react';

export type User = {
    id: string;
    userName: string;
};

export const UserContext = createContext<
    [User | undefined, Dispatch<User>] | null
>(null);

// const FIND_USER = gql`
//     query getUser($id: ID!) {
//         getUser(id: $id) {
//             firstName
//             lastName
//         }
//     }
// `;

export const UserProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User>();
    // const id = 1;
    // const { loading, error: queryError, data } = useQuery(FIND_USER, {
    //     variables: { id },
    // });
    // if (data) {
    //     setUser(data);
    // }

    // TEMPORARY fake user initialization
    useEffect(() => {
        setUser({
            id: 'my_id',
            userName: 'Me',
        });
    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
};
