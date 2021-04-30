import React, { FC, useContext, Dispatch } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import ChatView from '../../Chat/ChatView/ChatView';
import ChatForm from '../../Chat/ChatForm/ChatForm';
import { UserContext, User } from '../../../contexts/UserContext';
import { ChatPage } from './style';

const chatRoomTest = '608aa75c09feab277fe800b3';

const FIND_CHAT = gql`
    query getOneChatRoom($id: ID!) {
        getOneChatRoom(_id: $id) {
            title
            users {
                userName
                id
            }
            messages {
                id
                text
                author
                createdAt
            }
            createdAt
            isActiv
        }
    }
`;

const RandomChat: FC = () => {
    const user = useContext<[User | undefined, Dispatch<User>] | null>(
        UserContext
    );
    // const { id } = useParams<{ id: string }>();
    // const { loading, error: queryError, data } = useQuery(FIND_CHAT, {
    //     variables: { id },
    // });

    // // TEMPORARY fake messages initialization
    const messages = [
        {
            text: 'jhtfjhgfjh',
            author: 'toto',
            createdAt: 'jythfgjhgvh',
        },
        {
            text: 'urtkrukyu',
            author: 'toto',
            createdAt: 'truk',
        },
        {
            text: 'trk',
            author: 'titi',
            createdAt: 'rutkyukhj',
        },
    ];
    return (
        <ChatPage>
            <ChatView user={user && user[0]} messages={messages} />
            <ChatForm chatId={chatRoomTest} />
        </ChatPage>
    );
};

export default RandomChat;
