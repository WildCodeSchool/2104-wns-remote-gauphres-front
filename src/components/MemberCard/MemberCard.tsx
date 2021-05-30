import { gql, useQuery } from '@apollo/client';
import React, { ReactElement, useEffect, useState, FC } from 'react';
import { differenceInYears } from 'date-fns';
import { Card, Img, HobbiesContainer } from './style';
import { User } from '../../contexts/UserContext';

export const GET_USER_BY_USERNAME = gql`
    query getUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
            username
            firstname
            lastname
            chatrooms {
                title
            }
            avatar
            isConnected
            birthDate
            hobbies {
                title
                category
            }
        }
    }
`;

type MemberCardProps = {
    username: string;
};

export const MemberCard: FC<MemberCardProps> = ({ username }): ReactElement => {
    const { loading, data } = useQuery(GET_USER_BY_USERNAME, {
        variables: { username },
    });

    const [userData, setUserData] = useState<User>();
    useEffect(() => {
        setUserData(data?.getUserByUsername);
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
        return (
            <Card>
                <p>loading</p>
            </Card>
        );
    }

    return (
        <Card data-testid="cardContainer">
            <Img
                className="avatar"
                data-testid="avatar"
                src={userData?.avatar}
                alt={userData?.username}
                isConnected={userData?.isConnected || false}
            />
            <p data-testid="userIdentity">
                {userData?.firstname} {userData?.lastname}
            </p>
            <p data-testid="age"> {age} ans </p>
            <HobbiesContainer data-testid="hobbies">
                {displayhobbies()}
            </HobbiesContainer>
        </Card>
    );
};

export default MemberCard;
