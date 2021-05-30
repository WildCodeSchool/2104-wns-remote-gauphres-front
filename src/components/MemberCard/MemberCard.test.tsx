import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MockedProvider } from '@apollo/client/testing';
import { MemberCard, GET_USER_BY_USERNAME } from './MemberCard';
import { Card, Img, HobbiesContainer } from './style';

const mocks = [
    {
        request: {
            query: GET_USER_BY_USERNAME,
        },
        result: {
            data: {
                getUserByUsername: [
                    {
                        username: 'NiceUser',
                        firstname: 'userFirstname',
                        lastname: 'userLastname',
                        chatrooms: [],
                        avatar:
                            'https://randomuser.me/api/portraits/men/52.jpg',
                        isConnected: true,
                        birthDate: '66/66/6666',
                        hobbies: [],
                    },
                ],
            },
        },
    },
];

test('It should not display memberCard when loading', () => {
    render(
        <MockedProvider mocks={mocks}>
            <MemberCard username="" />
        </MockedProvider>
    );
    expect(screen.getByText('loading')).toBeInTheDocument();
});

test('It should display the memberCard', async () => {
    render(
        <MockedProvider mocks={mocks}>
            <MemberCard username="" />
        </MockedProvider>
    );

    await waitFor(() => screen.getByTestId('cardContainer'));
    const avatar = screen.getAllByTestId('avatar');
    const userIdentity = screen.getAllByTestId('userIdentity');
    const age = screen.getAllByTestId('age');
    const hobbies = screen.getAllByTestId('hobbies');

    expect(screen.getByTestId('cardContainer')).toContainElement(avatar[0]);
    expect(screen.getByTestId('cardContainer')).toContainElement(
        userIdentity[0]
    );
    expect(screen.getByTestId('cardContainer')).toContainElement(age[0]);
    expect(screen.getByTestId('cardContainer')).toContainElement(hobbies[0]);
});

// WIP
test('It should display data', () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Card>
                <Img
                    src={mocks[0].result.data.getUserByUsername[0].avatar}
                    alt={mocks[0].result.data.getUserByUsername[0].username}
                    isConnected={
                        mocks[0].result.data.getUserByUsername[0].isConnected
                    }
                />
                <p data-testid="userIdentity">
                    {mocks[0].result.data.getUserByUsername[0].firstname}
                    {mocks[0].result.data.getUserByUsername[0].lastname}
                </p>
                <p>{mocks[0].result.data.getUserByUsername[0].birthDate} ans</p>
                <HobbiesContainer>
                    {mocks[0].result.data.getUserByUsername[0].hobbies}
                </HobbiesContainer>
            </Card>
        </MockedProvider>
    );

    expect(
        screen.getByAltText(mocks[0].result.data.getUserByUsername[0].username)
    ).toHaveAttribute('src', 'https://randomuser.me/api/portraits/men/52.jpg');

    expect(
        screen.getByAltText(mocks[0].result.data.getUserByUsername[0].username)
    ).toHaveAttribute('alt', 'NiceUser');

    expect(
        screen.getByAltText(mocks[0].result.data.getUserByUsername[0].username)
    ).toHaveProperty('isConnected', true);

    // TODO: can't test the p text
    /* expect(screen.getByTestId('userIdentity')).toEqual(
        <p data-testid="userIdentity">userFirstname</p>
    ); */
});
