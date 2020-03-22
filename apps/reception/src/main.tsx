import React from 'react';
import ReactDOM from 'react-dom';

import { FrontWrapper } from '@mars/front-wrapper';
import { App } from './app/app';

ReactDOM.render(
  <FrontWrapper>
    <App />
  </FrontWrapper>,
  document.getElementById('root')
);
