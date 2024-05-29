import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import ServicesProvidedCard from '../src/components/Cards/ServicesProvidedCard';

suite('Services Provided Card Tests', () => {
  render(<ServicesProvidedCard />);
  const servicesProvidedCard = screen.getByTestId('servicesProvidedCard-1');

  test('Services Provided Card Renders', () => {
    expect(servicesProvidedCard).toBeDefined();
  });

  test('Services Provided Card contains a header', () => {
    expect(servicesProvidedCard.innerHTML.includes('h2')).toBe(true);
  });

  test('Services Provided Card has a list of Services', () => {
    expect(servicesProvidedCard.innerHTML.includes('ul')).toBe(true);
  });

  test('Services Provided Card contains an image', () => {
    expect(servicesProvidedCard.innerHTML.includes('img')).toBe(true);
  });

  test('Services Provided Card handles mobile somehow', () => {
    expect(servicesProvidedCard.innerHTML.includes('lg:flex-row')).toBe(true);
  });
});
