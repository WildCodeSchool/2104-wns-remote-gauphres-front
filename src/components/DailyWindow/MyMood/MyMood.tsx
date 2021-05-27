import React, { FC } from 'react';
import { User } from '../../../contexts/UserContext';

type MoodProps = {
    user: User | undefined | null;
};

const MyMood: FC<MoodProps> = ({ user }: MoodProps) => {
    return (
        <div>
            <p>{user?.userMood?.title}</p>
            <p>{user?.userMood?.image}</p>
        </div>
    );
};

export default MyMood;
