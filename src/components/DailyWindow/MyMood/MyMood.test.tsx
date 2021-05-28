import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyMood from './MyMood';
import userJson from '../../../../public/user.json';

test('loads and displays mood', async () => {
    render(<MyMood user={userJson} />);
    await waitFor(() => screen.getByTestId('mymood-title'));
    expect(screen.getByTestId('mymood-title')).toHaveTextContent('test_title');
    expect(screen.getByTestId('mymood-image')).toHaveAttribute(
        'alt',
        'test_title'
    );
});
