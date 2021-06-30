import React from 'react';
import ReactDOM from 'react-dom';
import CreatePalette from '../CreatePalette';

it('renders without crashing - createPalette', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreatePalette />, div);
});