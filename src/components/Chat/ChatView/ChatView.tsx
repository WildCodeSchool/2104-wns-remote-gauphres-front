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
                <div>
                    {messages.map((message) => (
                        <BubbleMessage>{message.text}</BubbleMessage>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default ChatView;
