import React, { Dispatch, FC, useContext } from 'react';
import { User, UserContext } from '../../../contexts/UserContext';
import MyMood from '../../DailyWindow/MyMood/MyMood';
import { MainWrapper, RightWrapper, Wrapper } from './style';
// import MyMatch from '../../DailyWindow/MyMatch';

const Dashboard: FC = () => {
    const user = useContext<[User | undefined, Dispatch<User>] | null>(
        UserContext
    );

    // for test, mood id
    const id = '6096bf9fab2e797b569f4183';

    return (
        <Wrapper>
            <MainWrapper>
                <h1>Dashboard</h1>
            </MainWrapper>
            <RightWrapper>
                <MyMood user={user && user[0]} />
                {/* <MyMatch /> */}
            </RightWrapper>
        </Wrapper>
    );
};

export default Dashboard;
