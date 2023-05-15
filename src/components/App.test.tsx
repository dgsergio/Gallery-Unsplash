import { screen, render } from '@testing-library/react';
import unsplash from '../mocks/unsplash.json';
import { vi } from 'vitest';
import App from './App';

describe('App component', () => {
  it('should render x list images element', async () => {
    render(<App />);
    window.fetch = vi.fn().mockReturnValueOnce({
      json: JSON.stringify(unsplash),
      ok: true,
    });
    const listitemEls = await screen.findAllByRole('listitem');
    expect(listitemEls).toHaveLength(10);
  });
});
