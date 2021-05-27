import { gql, useQuery } from '@apollo/client';
import React, { FC, useEffect, useState } from 'react';

const GET_CONNECTED = gql`
    query getUsersConnected {
        getUsersConnected {
            isConnected
        }
    }
`;

type UsersConnectedType = {
    isConnected: boolean;
    length: number;
};

const UserConnected: FC = () => {
    const { loading, error: queryError, data } = useQuery(GET_CONNECTED);
    const [userConnected, setUserConnected] = useState<UsersConnectedType>();

    useEffect(() => {
        setUserConnected(data && data.getUsersConnected);
    }, [data]);

    return (
        <div>
            <p>{userConnected?.length} autres utilisateurs connectés</p>
        </div>
    );
};

export default UserConnected;
