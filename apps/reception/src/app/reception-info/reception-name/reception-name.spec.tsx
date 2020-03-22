import React from 'react';
import { render } from '@testing-library/react';

import ReceptionName from './reception-name';

describe(' ReceptionName', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReceptionName />);
    expect(baseElement).toBeTruthy();
  });
});
