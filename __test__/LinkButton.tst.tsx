import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import LinkButton from '../src/components/LinkButton';

suite('Link Button Tests', () => {
  render(<LinkButton />);

  const linkbutton = screen.getByTestId('linkbutton-1');

  test('linkbutton Renders', () => {
    expect(linkbutton).toBeDefined();
  });
});
