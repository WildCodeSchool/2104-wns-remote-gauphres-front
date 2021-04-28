import React, { FC } from 'react';

const ChatForm: FC = () => {
    return (
        <>
            <div>ChatForm</div>
            <input type="text" name="message" />
            <button type="button">Envoyer</button>
        </>
    );
};

export default ChatForm;
