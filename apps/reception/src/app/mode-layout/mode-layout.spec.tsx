import React from 'react';
import { render } from '@testing-library/react';

import ModeLayout from './mode-layout';

describe(' ModeLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModeLayout />);
    expect(baseElement).toBeTruthy();
  });
});
