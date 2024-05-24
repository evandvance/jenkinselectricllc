import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlueButton from '../src/components/Buttons/BlueButton';

suite('Blue Button Tests', () => {
  render(<BlueButton />);
  const blueButton = screen.getByTestId('blueButton-1');

  test('Blue Button Renders', () => {
    expect(blueButton).toBeDefined();
  });

  test('Button Is Link', () => {
    expect(blueButton.role).toBe('a');
  });

  test('Button is blue', () => {
    expect(blueButton.classList).toContain('bg-jellcblue');
  });
});
