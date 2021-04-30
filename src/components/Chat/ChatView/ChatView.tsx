import React, { FC } from 'react';
import { Container, BubbleMessage } from './style';
import { User } from '../../../contexts/UserContext';

type Message = {
    text: string;
    author: string;
    createdAt: string;
};

type ChatViewProps = {
    messages: Message[];
    user: User | null | undefined;
};

const ChatView: FC<ChatViewProps> = ({ messages, user }: ChatViewProps) => {
    return (
        <>
            <Container>
                {messages.map((message) => (
                    <BubbleMessage>{message.text}</BubbleMessage>
                ))}
            </Container>
        </>
    );
};

export default ChatView;
