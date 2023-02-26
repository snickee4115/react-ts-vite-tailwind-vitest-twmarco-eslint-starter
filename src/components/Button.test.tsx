import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('ButtonTest', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<Button label="test" />);
    // ACT
    // EXPECT
    expect(screen.getByRole('button')).toHaveTextContent('test');
  });
});
