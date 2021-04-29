import React, { FC } from 'react';
import { Container, BubbleMessage } from './style';

type Message = {
    text: string;
    author: string;
    createdAt: string;
};

type ChatViewProps = {
    messages: Message[];
};

const ChatView: FC<ChatViewProps> = ({ messages }: ChatViewProps) => {
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
