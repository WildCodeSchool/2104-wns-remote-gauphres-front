import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RandomChat from './components/pages/RandomChatPage/RandomChat';
import HomePage from './components/pages/HomePage/HomePage';

const App: FC = () => {
    return (
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route path="/random-chat" component={RandomChat} />
        </Router>
    );
};

export default App;
