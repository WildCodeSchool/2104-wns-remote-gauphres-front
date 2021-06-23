import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    split,
    HttpLink,
} from '@apollo/client';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';
import RandomChat from './components/pages/RandomChatPage/RandomChat';
import './App.css';
import { Menu } from './style';
import SideMenu from './components/SideMenu/SideMenu';
import Dashboard from './components/pages/Dashboard/Dashboard';
import ArticlesPage from './components/pages/Articles/Article';
import EventsPage from './components/pages/Events/Events';
import MembersPage from './components/pages/Members/Members';
import { UserProvider } from './contexts/UserContext';

// const wsLink = new WebSocketLink({
//     uri: 'ws://localhost:9000/subscriptions',
//     options: {
//         reconnect: true,
//     },
// });

// const httpLink = new HttpLink({
//     uri: 'http://localhost:5000/graphql',
//     credentials: 'include',
// });

// const link = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === 'OperationDefinition' &&
//             definition.operation === 'subscription'
//         );
//     },
//     // wsLink,
//     httpLink
// );

// const client = new ApolloClient({
//     link,
//     cache: new InMemoryCache(),
// });

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});

const App: FC = () => {
    return (
        <Router>
            <ApolloProvider client={client}>
                <UserProvider>
                    <Menu>
                        <SideMenu />
                        <Switch>
                            <Route
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            <Route path="/articles" component={ArticlesPage} />
                            <Route path="/random-chat" component={RandomChat} />
                            <Route path="/members" component={MembersPage} />
                            <Route path="/events" component={EventsPage} />
                        </Switch>
                    </Menu>
                </UserProvider>
            </ApolloProvider>
        </Router>
    );
};

export default App;
