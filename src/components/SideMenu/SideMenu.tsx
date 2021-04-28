import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const SideMenu: FC = () => {
    return (
        <>
            <div>SideMenu</div>
            <button type="button">
                <Link to="/">To HomePage</Link>
            </button>
            <button type="button">
                <Link to="/random-chat">To RandomChat</Link>
            </button>
        </>
    );
};

export default SideMenu;
