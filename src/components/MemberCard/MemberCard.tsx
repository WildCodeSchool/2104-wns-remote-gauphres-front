import React, { FunctionComponent, ReactElement } from 'react';
import { differenceInYears } from 'date-fns';
import { Card, Img, HobbiesContainer } from './style';

const MemberCard: FunctionComponent = (): ReactElement => {
    // simulated data
    const userData = {
        userName: 'NiceUser',
        isConnected: true,
        birthdate: new Date('1987-07-28'),
        firstname: 'Patrick',
        lastname: 'Duffy',
        avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
        hobbies: [
            {
                category: 'preferedAnimal',
                title: 'Chat',
            },
            {
                category: 'preferedColor',
                title: 'Green',
            },
            {
                category: 'preferedFood',
                title: 'Eggs',
            },
            {
                category: 'preferedActivities',
                title: ['walk', 'climing', 'sport'],
            },
        ],
    };

    const age =
        userData.birthdate &&
        differenceInYears(new Date(), new Date(userData.birthdate));

    const displayhobbies = () => {
        return userData.hobbies.map((hobby) => {
            return (
                <p>
                    <b>{hobby.category}: </b>{' '}
                    {Array.isArray(hobby.title)
                        ? hobby.title.join(', ')
                        : hobby.title}
                </p>
            );
        });
    };

    return (
        <Card>
            <Img
                className="avatar"
                data-testid="avatar"
                src={userData.avatar}
                alt={userData.userName}
                isConnected={userData.isConnected}
            />
            <p data-testid="userIdentity">
                {userData.firstname} {userData.lastname}
            </p>
            <p data-testid="age"> {age} ans </p>
            <HobbiesContainer> {displayhobbies()} </HobbiesContainer>
        </Card>
    );
};

export default MemberCard;
