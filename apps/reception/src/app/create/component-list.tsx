import React, { ChangeEvent } from 'react';
import { Field, FieldIdentifier, fields } from '../fields/fields';
import { Grid, Radio } from '@material-ui/core';

export interface ComponentListProps {
  onChange: (FieldIdentifier) => void;
  value: FieldIdentifier;
}

export const ComponentList = (props: ComponentListProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <Grid container spacing={2} direction="column">
      {fields.map(({ field: Field, ...other }) => (
        <Grid item key={other.identifier}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={11}>
              <Field {...other.defaultProps} />
            </Grid>
            <Grid item xs={1}>
              <Radio
                checked={props.value === other.identifier}
                name="radio-component-list"
                onChange={handleChange}
                value={other.identifier}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
