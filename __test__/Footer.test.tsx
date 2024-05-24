import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

suite('Footer Tests', () => {
  render(<Footer />);

  const footer = screen.getByTestId('footer-1');
  const icons = screen.getAllByRole('i');

  test('Footer Renders', () => {
    expect(footer).toBeDefined();
  });

  test('Footer Contains JELLC', () => {
    expect(screen.getByText('Jenkins Electric LLC.')).toBeDefined();
  });

  test('Footer Contains Contact Us Link', () => {
    const contactUsLink = screen.getByRole('a');

    expect.soft(contactUsLink).toBeDefined();
    expect.soft(contactUsLink.innerHTML).toContain('Contact Us');
  });

  test('Icons Exist', () => {
    expect(icons).toBeDefined();
  });

  test('Icons Are Links', () => {
    icons.forEach((icon) => {
      expect.soft(icon.parentElement?.role).toBe('a');
    });
  });
});
