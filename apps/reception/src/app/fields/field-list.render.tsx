import React from 'react';
import { Field } from './fields';
import { Grid } from '@material-ui/core';

export interface FieldListRenderProps {
  fields: Field[];
}

export const FieldListRender = (props: FieldListRenderProps) => {
  return (
    <Grid container spacing={2}>
      {props.fields.map(({ field: Field, defaultProps }, index) => (
        <Grid item key={index} xs={6}>
          <Field {...defaultProps} />
        </Grid>
      ))}
    </Grid>
  );
};
