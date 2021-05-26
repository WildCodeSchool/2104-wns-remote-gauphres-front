import React, { Dispatch, FC, useEffect, useState, useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { User, UserContext } from '../../../contexts/UserContext';
import MyMood from '../../DailyWindow/MyMood/MyMood';
// import MyMatch from '../../DailyWindow/MyMatch';

const FIND_MOOD = gql`
    query getOneMood($id: String!) {
        getOneMood(_id: $id) {
            title
            image
        }
    }
`;

type MoodType = {
    title: string;
    image: string;
};

const Dashboard: FC = () => {
    const user = useContext<[User | undefined, Dispatch<User>] | null>(
        UserContext
    );

    // for test, mood id
    const id = '6096bf9fab2e797b569f4183';

    const { loading, error: queryError, data } = useQuery(FIND_MOOD, {
        variables: { id },
    });
    const [moodData, setMoodData] = useState<MoodType>();
    useEffect(() => {
        setMoodData(data && data.getOneMood);
    }, [data]);

    return (
        <>
            <div>Dashboard</div>
            <MyMood user={user && user[0]} />
            {/* <MyMatch /> */}
        </>
    );
};

export default Dashboard;
