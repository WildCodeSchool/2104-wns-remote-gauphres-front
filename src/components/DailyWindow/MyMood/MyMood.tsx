import React, { FC } from 'react';
import { User } from '../../../contexts/UserContext';
import SmallCard from '../moodStyle';

type MoodProps = {
    user: User | undefined | null;
};

const MyMood: FC<MoodProps> = ({ user }: MoodProps) => {
    return (
        <SmallCard>
            <p data-testid="mymood-title">{user?.userMood?.title}</p>
            <img
                data-testid="mymood-image"
                src={user?.userMood?.image}
                alt={user?.userMood?.title}
            />
        </SmallCard>
    );
};

export default MyMood;
