import { gql, useQuery } from '@apollo/client';
import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useState,
} from 'react';
import { differenceInYears } from 'date-fns';
import { Card, Img, HobbiesContainer } from './style';
import { User } from '../../contexts/UserContext';

const GET_USER_BY_ID = gql`
    query getUserById($id: String!) {
        getUserById(_id: $id) {
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
            hobbies {
                title
                category
            }
        }
    }
`;

const MemberCard: FunctionComponent = (): ReactElement => {
    const { loading, error, data } = useQuery(GET_USER_BY_ID, {
        variables: { id: '60899d221aeef5070efe5c45' },
    });

    const [userData, setUserData] = useState<User>();
    useEffect(() => {
        setUserData(data?.getUserById);
    }, [data]);

    const age =
        userData?.birthDate &&
        differenceInYears(new Date(), new Date(userData.birthDate));

    const displayhobbies = () => {
        return userData?.hobbies.map((hobby: any) => {
            return (
                <p>
                    <b>{hobby.category}: </b>
                    {Array.isArray(hobby.title)
                        ? hobby.title.join(', ')
                        : hobby.title}
                </p>
            );
        });
    };

    if (loading) {
        return <p>loading</p>;
    }

    return (
        <Card>
            <Img
                className="avatar"
                data-testid="avatar"
                src={userData?.avatar}
                alt={userData?.userName}
                isConnected={userData?.isConnected || false}
            />
            <p data-testid="userIdentity">
                {userData?.firstname} {userData?.lastname}
            </p>
            <p data-testid="age"> {age} ans </p>
            <HobbiesContainer> {displayhobbies()} </HobbiesContainer>
        </Card>
    );
};

export default MemberCard;
