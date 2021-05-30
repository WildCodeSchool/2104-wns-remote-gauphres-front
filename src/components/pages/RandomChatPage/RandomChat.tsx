import React, { FC, useContext, Dispatch, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { ChatView, Message } from '../../Chat/ChatView/ChatView';
import ChatForm from '../../Chat/ChatForm/ChatForm';
import { UserContext, User } from '../../../contexts/UserContext';
import { ChatPage } from './style';
import { MemberCard } from '../../MemberCard/MemberCard';

const FIND_CHAT = gql`
    query getOneChatRoom($chatRoomId: String!) {
        getOneChatRoom(_id: $chatRoomId) {
            title
            users {
                username
                firstname
                lastname
                avatar
            }
            messages {
                text
                author {
                    username
                }
                createdAt
            }
            createdAt
            isActiv
        }
    }
`;

type ChatRoomType = {
    createdAt: string;
    isActiv: boolean;
    messages: Message[] | undefined;
    users: User[];
    title: string;
};

function compareUsernames(
    currentUsername: string | null | undefined,
    users: User[]
): string {
    if (users) {
        return users
            .map((chatRoomUser: User) => {
                return chatRoomUser.username;
            })
            .filter((username) => username !== currentUsername)
            .toString();
    }
    return '';
}

const RandomChat: FC = () => {
    // TODO: change to dynamic
    const chatRoomId = '608aa75c09feab277fe800b3';
    // Get the current chatRoom
    const { loading, error: queryError, data } = useQuery(FIND_CHAT, {
        variables: { chatRoomId },
    });

    const [chatRoomData, setChatRoomData] = useState<ChatRoomType>();
    useEffect(() => {
        setChatRoomData(data && data.getOneChatRoom);
    }, [data]);

    // Get the current logged user
    const user = useContext<[User | undefined, Dispatch<User>] | null>(
        UserContext
    );
    // TODO: find another solution (it's cause of context null or undefined)
    const currentUserUsername = user ? user[0]?.username : null;

    // Take the username of the chatroom mate
    const chatroomMateUsername = compareUsernames(
        currentUserUsername,
        data?.getOneChatRoom.users
    );

    return (
        <>
            <ChatPage>
                <ChatView
                    user={user && user[0]}
                    messages={chatRoomData && chatRoomData.messages}
                />
                <ChatForm chatId={chatRoomId} />
            </ChatPage>
            <MemberCard username={chatroomMateUsername} />
        </>
    );
};

export default RandomChat;
