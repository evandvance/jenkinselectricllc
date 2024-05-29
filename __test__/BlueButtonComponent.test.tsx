import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlueButton from '../src/components/Buttons/BlueButton';

suite('Blue Button Tests', () => {
  render(<BlueButton href="/" title="Test Button" />);
  const blueButton = screen.getByTestId('blueButton-1');

  test('Blue Button Renders', () => {
    expect(blueButton).toBeDefined();
  });

  test('Button is blue', () => {
    expect(blueButton.classList).toContain('bg-jellcblue');
  });
});
