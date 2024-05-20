import { test, expect, suite } from 'vitest';
import { render, screen } from '@testing-library/react';
import CenterChildren from '../src/components/utilities/CenterChildren';

suite('CenterChildren Tests', () => {
  render(
    <CenterChildren className="TestClassName">
      Test Text<div className="ChildNode">Child Node</div>
    </CenterChildren>
  );

  const parentNode = screen.getByText('Test Text');
  const childNode = screen.getByText('Child Node');

  test('CenterChildren Renders', () => {
    expect(parentNode).toBeDefined();
  });

  test('CenterChildren allows for react nodes as a child', () => {
    expect(childNode.classList).toContain('ChildNode');
  });

  test('CenterChildren allows for classname to be passed to it', () => {
    expect(parentNode.classList).toContain('TestClassName');
  });

  test('CenterChildren centers children', () => {
    expect.soft(parentNode.classList).toContain('flex');
    expect.soft(parentNode.classList).toContain('justify-center');
    expect.soft(parentNode.classList).toContain('items-center');
  });
});
