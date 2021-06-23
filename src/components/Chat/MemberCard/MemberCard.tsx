import React, { FunctionComponent, ReactElement } from 'react';
import { Article, Img } from './style';

const MemberCard: FunctionComponent = (): ReactElement => {
    const userData = {
        userName: 'NiceUser',
        firstname: 'firstname',
        lastname: 'lastname',
        avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
    };

    return (
        <Article>
            <Img src={userData.avatar} alt={userData.userName} />
            <h2>{userData.userName}</h2>
            <h3>{userData.firstname}</h3>
            <h3>{userData.lastname}</h3>
        </Article>
    );
};

export default MemberCard;
