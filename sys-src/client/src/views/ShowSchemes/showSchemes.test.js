import React from 'react';
import ReactDOM from 'react-dom';
import ShowSchemes from '../ShowSchemes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowSchemes />, div);
});
