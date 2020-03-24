import React from 'react';
import { Grid, Radio } from '@material-ui/core';
import { FieldIdentifier, fields } from '../fields/fields';

export interface ComponentListProps {
  onChange: (field: FieldIdentifier) => void;
  value: FieldIdentifier;
}

export const ComponentList = (props: ComponentListProps) => {
  return (
    <Grid container spacing={2} direction="column">
      {fields.map(({ field: Field, ...value }, index) => (
        <Grid item key={index}>
          <Grid container spacing={2}>
            <Grid item xs={11}>
              <Field {...value.defaultProps} />
            </Grid>
            <Grid item xs={1}>
              <Radio
                checked={props.value === value.identifier}
                onChange={() => props.onChange(value.identifier)}
                name="component-list-radio-button"
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
