import React, {
    createContext,
    useState,
    Dispatch,
    ReactNode,
    useEffect,
} from 'react';

type User = {
    id: string;
    userName: string;
};

const UserContext = createContext<[User | undefined, Dispatch<User>] | null>(
    null
);

// const FIND_USER = gql`
//     query getUser($id: ID!) {
//         getUser(id: $id) {
//             firstName
//             lastName
//         }
//     }
// `;

const UserProvider = ({ children }) => {
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

export default UserProvider;
