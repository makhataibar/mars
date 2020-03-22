import React from 'react';
import { render } from '@testing-library/react';

import Fields from './fields';

describe(' Fields', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fields />);
    expect(baseElement).toBeTruthy();
  });
});
