import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/app/page';

suite('Homepage Tests', () => {
  render(<HomePage />);

  test('Homepage Smoke test', () => {
    expect(screen).toBeDefined();
  });

  test('Page has a bg video', () => {});

  test('Page Has a Header that says Jenkins Electric LLC', () => {});
});
