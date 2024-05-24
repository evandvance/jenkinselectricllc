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
    expect(servicesProvidedCard.innerHTML).toContain('H2');
  });

  test('Services Provided Card has a list of Services', () => {
    expect(servicesProvidedCard.innerHTML).toContain('ul');
  });

  test('Services Provided Card contains an image', () => {
    expect(servicesProvidedCard.innerHTML).toContain('img');
  });

  test('Services Provided Card handles mobile somehow', () => {
    expect(servicesProvidedCard.innerHTML).toContain('sm');
  });
});
