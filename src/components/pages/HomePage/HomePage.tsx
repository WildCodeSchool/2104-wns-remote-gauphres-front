import { Link } from 'react-router-dom';
import React, { FC } from 'react';

const HomePage: FC = () => {
    return (
        <>
            <div>HomePage</div>
            <button type="button">
                <Link to="/random-chat">To RandomChat</Link>
            </button>
        </>
    );
};

export default HomePage;
