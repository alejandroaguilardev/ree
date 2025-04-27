import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '../../src/pages/Home';

describe('HomePage Snapshot', () => {
    it('should match the snapshot', () => {
        const { asFragment } = render(<HomePage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
