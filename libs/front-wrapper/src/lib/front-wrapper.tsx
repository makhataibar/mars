import React from 'react';
import { CssBaseline, Container, ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';

export interface FrontWrapperProps {
  children: JSX.Element;
}

export const FrontWrapper = (props: FrontWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>{props.children}</Container>
    </ThemeProvider>
  );
};
