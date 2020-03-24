import React, { useState } from 'react';
import { Grid, Step, StepLabel, Stepper, Button } from '@material-ui/core';

export interface Step {
  title: string;
  component: JSX.Element;
}
export interface AddComponentStepperProps {
  onFinish: () => void;
  steps: [Step];
}
enum ToggleStepMode {
  Prev = 'PREVIOUS',
  Next = 'NEXT',
  Reset = 'RESET'
}

export const AddComponentStepper = (props: AddComponentStepperProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const handleToggleStep = (mode: ToggleStepMode) => () => {
    switch (mode) {
      case ToggleStepMode.Next:
        if (activeStep >= props.steps.length) return;
        setActiveStep(prevState => prevState + 1);
        return;
      case ToggleStepMode.Prev:
        if (activeStep <= 0) return;
        setActiveStep(prevState => prevState - 1);
        return;
      case ToggleStepMode.Reset:
        setActiveStep(0);
        return;
      default:
        throw new Error('undefined step');
    }
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Stepper alternativeLabel activeStep={activeStep}>
          {props.steps.map(({ title }, index) => (
            <Step key={index}>
              <StepLabel>{title}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid item>
        {props.steps[activeStep]?.component}
      </Grid>
      <Grid item>
        {activeStep === props.steps.length ? (
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button onClick={handleToggleStep(ToggleStepMode.Reset)}>
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
              <Button onClick={handleToggleStep(ToggleStepMode.Prev)}>
                Назад
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                onClick={handleToggleStep(ToggleStepMode.Next)}
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
