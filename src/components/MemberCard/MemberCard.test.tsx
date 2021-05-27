import React from 'react';
import { render, screen } from '@testing-library/react';
import MemberCard from './MemberCard';

// TODO find how to test styled components for avatar and isLogged

test('It should display', () => {
    render(<MemberCard />);
    expect(screen.getByTestId('age')).toBeInTheDocument();
    expect(screen.getByTestId('userIdentity')).toBeInTheDocument();
});
