import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/components/Navbar';

suite('Navbar Tests', () => {
  render(<Navbar />);

  const navbar = screen.getByTestId('nav-1');

  test('Navbar Renders', () => {
    expect(navbar).toBeDefined();
  });

  test('Image Renders', () => {
    expect(screen.getAllByAltText('JenkinsElectricLLC Logo')).toBeDefined();
  });

  test('Links Render', () => {
    expect.soft(screen.getByText('Schedule Now')).toBeDefined();
    expect.soft(screen.getByText('Info')).toBeDefined();
    expect.soft(screen.getByText('Contact Us')).toBeDefined();
    expect.soft(screen.getByText('Appliances')).toBeDefined();
  });

  test('Navbar formats correctly on desktop', () => {
    expect.soft(navbar.classList).toContain('flex');
    expect.soft(navbar.classList).toContain('justify-around');
    expect.soft(navbar.classList).toContain('items-center');
    expect.soft(navbar.className).toContain('flex-col');
  });

  test('Navbar Has correct background color', () => {
    expect(navbar.classList).toContain('bg-slate-950');
  });
});
