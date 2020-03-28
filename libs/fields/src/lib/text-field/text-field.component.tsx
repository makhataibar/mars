import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import { TextField } from '@material-ui/core';

export const TextFieldComponent = (props: TextFieldProps) => (
  <TextField {...props} />
);
