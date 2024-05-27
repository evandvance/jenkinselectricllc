import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUsCard from '../src/components/Cards/AboutUsCard';

suite('About Us Card Tests', () => {
  render(<AboutUsCard />);

  const aboutUsCard = screen.getByTestId('aboutUsCard-1');

  test('About Us Card Renders', () => {
    expect(aboutUsCard).toBeDefined();
  });

  test('About Us Card Contains an Image', () => {
    expect(aboutUsCard.innerHTML.includes('img')).toBe(true);
  });

  test('About Us Card Contains Header', () => {
    expect(aboutUsCard.innerHTML.includes('h2')).toBe(true);
  });

  test('About Us Card Contains Paragraph', () => {
    expect(aboutUsCard.innerHTML.includes('p')).toBe(true);
  });

  test('About Us Card Handles Mobile', () => {
    expect(screen.getByRole('img').parentElement?.classList).toContain(
      'lg:flex-row'
    );
  });
});
