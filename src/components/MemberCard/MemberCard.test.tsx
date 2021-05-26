import React from 'react';
import { render, screen } from '@testing-library/react';
import MemberCard from './MemberCard';

test('It should display', () => {
    render(<MemberCard />);
    expect(screen.getByTestId('userName')).toBeInTheDocument();
    expect(screen.getByTestId('userFirstname')).toBeInTheDocument();
    expect(screen.getByTestId('userLastname')).toBeInTheDocument();
});
