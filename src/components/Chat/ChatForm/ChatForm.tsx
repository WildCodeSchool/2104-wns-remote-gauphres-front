import React, { FC } from 'react';
import { Container, Form } from './style';

const ChatForm: FC = () => {
    return (
        <Container>
            <Form>
                <input type="text" name="message" className="input" />
                <button type="button" className="button">
                    Envoyer
                </button>
            </Form>
        </Container>
    );
};

export default ChatForm;
