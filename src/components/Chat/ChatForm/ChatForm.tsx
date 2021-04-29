import { gql, useMutation } from '@apollo/client';
import React, { FC, useState } from 'react';
import { Container, Form, FormInput, FormButton } from './style';

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
        <Container>
            <Form
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
                <FormInput
                    type="text"
                    name="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <FormButton type="submit">Envoyer</FormButton>
            </Form>
        </Container>
    );
};

export default ChatForm;
