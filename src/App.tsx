import React, { FC, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    split,
    HttpLink,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import RandomChat from './components/pages/RandomChatPage/RandomChat';
import HomePage from './components/pages/HomePage/HomePage';
import './App.css';
import UserProvider from './contexts/UserContext';

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:9000/subscriptions',
    options: {
        reconnect: true,
    },
});

const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
    credentials: 'include',
});

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

const App: FC = () => {
    return (
        <ApolloProvider client={client}>
            <UserProvider>
                <Router>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/random-chat" component={RandomChat} />
                </Router>
            </UserProvider>
        </ApolloProvider>
    );
};

export default App;
