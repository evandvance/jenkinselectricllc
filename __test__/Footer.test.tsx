import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

suite('Footer Tests', () => {
  render(<Footer />);

  const footer = screen.getByTestId('footer-1');
  const icons = screen.getByTestId('icons-1');

  test('Footer Renders', () => {
    expect(footer).toBeDefined();
  });

  test('Footer Contains JELLC', () => {
    expect(screen.getByText('Jenkins Electric LLC.')).toBeDefined();
  });

  test('Footer Contains Contact Us Link', () => {
    const contactUsLink = screen.getAllByText('Contact Us Now!');

    expect.soft(contactUsLink).toBeDefined();
  });

  test('Icons Exist', () => {
    expect(icons).toBeDefined();
  });
});
