import React from 'react';
import { Checkbox, CheckboxProps, FormControlLabel } from '@material-ui/core';

export interface CheckboxComponentProps extends CheckboxProps {
  label: string;
}

export const CheckboxComponent = ({ label, ...props }: CheckboxComponentProps) => (
  <FormControlLabel control={<Checkbox {...props} />} label={label} />
);
