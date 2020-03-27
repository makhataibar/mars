import React from 'react';
import { render } from '@testing-library/react';

import ComponentFillBuilder from './component-fill-builder';

describe(' ComponentFillBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentFillBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
