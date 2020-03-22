import React from 'react';
import { Grid } from '@material-ui/core';
import { ReceptionName } from './reception-name/reception-name';

export const ReceptionInfo = () => {
  return (
    <Grid container spacing={2} direction='column'>
      <Grid item>
        <ReceptionName />
      </Grid>
    </Grid>
  );
};
