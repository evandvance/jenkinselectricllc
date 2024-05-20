import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

test('Homepage Smoke test', () => {
  render(<Home />);
  expect(screen).toBeDefined();
});
