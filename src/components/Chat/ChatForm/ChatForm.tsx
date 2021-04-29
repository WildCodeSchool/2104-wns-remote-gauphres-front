import { gql, useMutation } from '@apollo/client';
import React, { FC, useState } from 'react';

const CREATE_MESSAGE = gql`
    mutation CreateMessage($input: InputMessage!) {
        createMessage(inputMessage: $input) {
            id
            text
            author
        }
    }
`;

const ChatForm: FC = () => {
    const [message, setMessage] = useState('');
    const [createMessage, { data }] = useMutation(CREATE_MESSAGE);

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createMessage({
                        variables: {
                            input: {
                                text: message,
                                author: 'aurélien',
                            },
                        },
                    });
                }}
            >
                <input
                    type="text"
                    name="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Envoyer</button>
            </form>
        </>

};

export default ChatForm;
