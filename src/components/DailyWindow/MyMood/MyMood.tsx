import React, { FC } from 'react';
import { User } from '../../../contexts/UserContext';

type MoodProps = {
    user: User | null | undefined;
};

const MyMood: FC<MoodProps> = ({ user }: MoodProps) => {
    return (
        <div>
            <p>{user.mood.title}</p>
            <p>{user.mood.image}</p>
        </div>
    );
};

export default MyMood;
