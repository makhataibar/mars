import React from 'react';
import {
  Button,
  Grid,
  StepLabel,
  Stepper as MuiStepper,
  Step
} from '@material-ui/core';
import { ToggleStepMode } from './stepper.hook';

export interface Step {
  title: string;
  component: JSX.Element;
}
export interface StepperProps {
  onFinish: () => void;
  steps: Step[];
  activeStep: number;
  onToggleStep: (mode: ToggleStepMode) => () => void;
}

export const Stepper = (props: StepperProps) => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <MuiStepper alternativeLabel activeStep={props.activeStep}>
          {props.steps.map(({ title }, index) => (
            <Step key={index}>
              <StepLabel>{title}</StepLabel>
            </Step>
          ))}
        </MuiStepper>
      </Grid>
      <Grid item>{props.steps[props.activeStep]?.component}</Grid>
      <Grid item>
        {props.activeStep === props.steps.length - 1 ? (
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button onClick={props.onToggleStep(ToggleStepMode.Reset)}>
                Сбросить
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" onClick={props.onFinish}>
                Завершить
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button onClick={props.onToggleStep(ToggleStepMode.Prev)}>
                Назад
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={props.onToggleStep(ToggleStepMode.Next)}
              >
                Вперед
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
