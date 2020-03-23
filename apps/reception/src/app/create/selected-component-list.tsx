import React from 'react';
import { FieldIdentifier, fields } from '../fields/fields';
import { useField } from 'formik';
import { Grid } from '@material-ui/core';

export const SelectedComponentList = () => {
  const [field, meta, helpers] = useField<FieldIdentifier[]>('components');

  return (
    <Grid container spacing={2}>
      {field.value.map((value, index) => {
        const { field: Field } = fields.find(
          value1 => value1.identifier === value
        );

        return (
          <Grid item key={index} xs={6}>
            <Field />
          </Grid>
        );
      })}
    </Grid>
  );
};
