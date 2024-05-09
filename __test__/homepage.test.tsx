import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

test('Render Homepage', () => {
  render(<Home />);
  expect(screen.getByText('Deploy')).toBeDefined();
});
