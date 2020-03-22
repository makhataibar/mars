import React from 'react';
import { Grid, Divider } from '@material-ui/core';

export interface ModeLayoutProps {
  left: JSX.Element;
  right: JSX.Element;
}

export const ModeLayout = (props: ModeLayoutProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        {props.left}
      </Grid>
      <Grid item xs={1}>
        <Divider orientation="vertical" variant="inset" />
      </Grid>
      <Grid item xs={4}>
        {props.right}
      </Grid>
    </Grid>
  );
};
