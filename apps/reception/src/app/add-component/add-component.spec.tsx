import React from 'react';
import { render } from '@testing-library/react';

import AddComponent from './add-component';

describe(' AddComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddComponent />);
    expect(baseElement).toBeTruthy();
  });
});
