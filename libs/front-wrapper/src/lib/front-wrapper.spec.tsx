import React from 'react';
import { render } from '@testing-library/react';

import FrontWrapper from './front-wrapper';

describe(' FrontWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
