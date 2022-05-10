import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './App';

let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    container && ReactDOM.createRoot(container).render(<App />)
  });
  const input = container?.querySelector('input');
  expect(input).toBeInTheDocument();  
});