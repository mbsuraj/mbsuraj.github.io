import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeContext';

function TestConsumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

describe('ThemeContext', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('defaults to dark theme and adds dark class', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles to light and removes dark class', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => screen.getByText('Toggle').click());
    expect(screen.getByTestId('theme').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('toggles back to dark', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );
    act(() => screen.getByText('Toggle').click());
    act(() => screen.getByText('Toggle').click());
    expect(screen.getByTestId('theme').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('throws when useTheme is used outside ThemeProvider', () => {
    expect(() => render(<TestConsumer />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
  });
});
