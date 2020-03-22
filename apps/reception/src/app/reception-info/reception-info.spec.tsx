import React from 'react';
import { render } from '@testing-library/react';

import ReceptionInfo from './reception-info';

describe(' ReceptionInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReceptionInfo />);
    expect(baseElement).toBeTruthy();
  });
});
