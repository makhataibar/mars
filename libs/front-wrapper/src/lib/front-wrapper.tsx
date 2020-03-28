import React from 'react';
import { CssBaseline, Container, ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';
import { setLocale } from 'yup';
import { ru } from '@mars/yup-i18n';

export interface FrontWrapperProps {
  children: JSX.Element;
}

export const FrontWrapper = (props: FrontWrapperProps) => {
  setLocale(ru);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>{props.children}</Container>
    </ThemeProvider>
  );
};
