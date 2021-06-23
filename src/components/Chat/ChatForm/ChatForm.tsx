import { gql, useMutation } from '@apollo/client';
import React, { FC, useState } from 'react';
import { Container, Form, FormInput, FormButton } from './style';

const CREATE_MESSAGE = gql`
    mutation sendMessage($id: String!, $newMessage: CreateMessageInput!) {
        sendMessage(_id: $id, newMessage: $newMessage) {
            messages {
                text
                createdAt
            }
            createdAt
            isActiv
            title
        }
    }
`;

type ChatFormProps = {
    chatId: string;
};

const isMessageValid = (message: string): boolean => {
    if (!message || message.trim() === '') {
        return false;
    }
    return true;
};

const ChatForm: FC<ChatFormProps> = ({ chatId }: ChatFormProps) => {
    const [message, setMessage] = useState('');
    const [createMessage, { data }] = useMutation(CREATE_MESSAGE);

    return (
        <Container>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (isMessageValid(message)) {
                        createMessage({
                            variables: {
                                id: chatId,
                                newMessage: {
                                    author: {
                                        id: '60899d221aeef5070efe5c45',
                                        userName: 'NiceUser',
                                    },
                                    text: message,
                                },
                            },
                        });
                    } else {
                        // TODO change this to a real error message
                        alert('You cannot send empty message');
                    }
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
