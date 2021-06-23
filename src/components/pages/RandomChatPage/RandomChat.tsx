import React, { FC, useContext, Dispatch, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { ChatView, Message } from '../../Chat/ChatView/ChatView';
import ChatForm from '../../Chat/ChatForm/ChatForm';
import { UserContext, User } from '../../../contexts/UserContext';
import { ChatPage } from './style';
import MemberCard from '../../Chat/MemberCard/MemberCard';

const chatRoomTest = '608aa75c09feab277fe800b3';

const FIND_CHAT = gql`
    query getOneChatRoom($id: String!) {
        getOneChatRoom(_id: $id) {
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

const RandomChat: FC = () => {
    const user = useContext<[User | undefined, Dispatch<User>] | null>(
        UserContext
    );

    // for test, chatroom id
    const id = '608aa75c09feab277fe800b3';

    const { loading, error: queryError, data } = useQuery(FIND_CHAT, {
        variables: { id },
    });
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
                <ChatForm chatId={chatRoomTest} />
            </ChatPage>
            <MemberCard />
        </>
    );
};

export default RandomChat;
