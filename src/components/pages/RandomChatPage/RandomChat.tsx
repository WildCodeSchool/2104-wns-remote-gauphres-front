import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const RandomChat: FC = () => {
    return (
        <>
            <div>RandomChat</div>
            <button type="button">
                <Link to="/">To HomePage</Link>
            </button>
        </>
    );
};

export default RandomChat;
