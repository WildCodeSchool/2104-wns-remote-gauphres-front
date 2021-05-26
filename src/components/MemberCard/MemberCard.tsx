import React, { FunctionComponent, ReactElement } from 'react';
import { Card, Img } from './style';

const MemberCard: FunctionComponent = (): ReactElement => {
    const userData = {
        userName: 'NiceUser',
        firstname: 'firstname',
        lastname: 'lastname',
        avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
    };

    return (
        <Card>
            <Img src={userData.avatar} alt={userData.userName} />
            <h2 data-testid="userName">{userData.userName}</h2>
            <h3 data-testid="userFirstname">{userData.firstname}</h3>
            <h3 data-testid="userLastname">{userData.lastname}</h3>
        </Card>
    );
};

export default MemberCard;
