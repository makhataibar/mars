import React from 'react';
import { render } from '@testing-library/react';

import Fields from './fields';

describe(' FieldList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Fields />);
    expect(baseElement).toBeTruthy();
  });
});
