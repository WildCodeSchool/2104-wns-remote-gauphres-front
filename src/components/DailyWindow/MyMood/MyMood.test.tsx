import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyMood from './MyMood';
import userJson from '../../../../public/user.json';

test('loads and displays mood', async () => {
    render(<MyMood user={userJson} />);
    await waitFor(() => screen.getByTestId('myMood-title'));
    expect(screen.getByTestId('myMood-title')).toHaveTextContent('test_title');
    expect(screen.getByTestId('myMood-image')).toHaveAttribute(
        'src',
        'test_image'
    );
    expect(screen.getByTestId('myMood-image')).toHaveAttribute(
        'alt',
        'test_title'
    );
});
