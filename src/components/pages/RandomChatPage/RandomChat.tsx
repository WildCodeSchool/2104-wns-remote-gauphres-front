import React, { FC, useContext, Dispatch, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { ChatView, Message } from '../../Chat/ChatView/ChatView';
import ChatForm from '../../Chat/ChatForm/ChatForm';
import { UserContext, User } from '../../../contexts/UserContext';
import { ChatPage } from './style';
import MemberCard from '../../MemberCard/MemberCard';

const FIND_CHAT = gql`
    query getOneChatRoom($chatRoomId: String!) {
        getOneChatRoom(_id: $chatRoomId) {
            title
            users {
                userName
                firstname
                lastname
                avatar
                id
            }
            messages {
                text
                author {
                    id
                    userName
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

function compareUsersId(currentUserId: string, users: User[]): string {
    if (users) {
        return users
            .map((chatRoomUser: User) => {
                return chatRoomUser.id;
            })
            .filter((id) => id !== currentUserId)
            .toString();
    }
    return '';
}

const RandomChat: FC = () => {
    const chatRoomId = '608aa75c09feab277fe800b3';

    const user = useContext<[User | undefined, Dispatch<User>] | null>(
        UserContext
    );

    const { loading, error: queryError, data } = useQuery(FIND_CHAT, {
        variables: { chatRoomId },
    });

    const test = compareUsersId(
        '60899d221aeef5070efe5c45',
        data?.getOneChatRoom.users
    );

    const [chatRoomData, setChatRoomData] = useState<ChatRoomType>();
    useEffect(() => {
        setChatRoomData(data && data.getOneChatRoom);
    }, [data]);

    return (
        <>
            <ChatPage>
                <ChatView
                    user={user && user[0]}
                    messages={chatRoomData && chatRoomData.messages}
                />
                <ChatForm chatId={chatRoomId} />
            </ChatPage>
            <MemberCard />
        </>
    );
};

export default RandomChat;
