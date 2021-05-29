import React, { FC } from 'react';
import { Container, BubbleMessage } from './style';
import { User } from '../../../contexts/UserContext';

export type Message = {
    text: string;
    author: User;
    createdAt: string;
};

type ChatViewProps = {
    messages: Message[] | undefined;
    user: User | null | undefined;
};

export const ChatView: FC<ChatViewProps> = ({
    messages,
    user,
}: ChatViewProps) => {
    return (
        <>
            <Container>
                {messages &&
                    messages.map((message) => {
                        const isMe = message.author.username === user?.username;
                        return (
                            <BubbleMessage isMe={isMe}>
                                {message.text}
                            </BubbleMessage>
                        );
                    })}
            </Container>
        </>
    );
};
