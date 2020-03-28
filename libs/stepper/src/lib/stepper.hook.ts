import { useState } from 'react';

export enum ToggleStepMode {
  Prev = 'PREVIOUS',
  Next = 'NEXT',
  Reset = 'RESET'
}
export type StepperHook = [number, (mode: ToggleStepMode) => () => void];

export const useStepper = (stepsLength: number): StepperHook => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const handleToggleStep = (mode: ToggleStepMode) => () => {
    switch (mode) {
      case ToggleStepMode.Next:
        if (activeStep >= stepsLength) return;
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
  return [activeStep, handleToggleStep];
};
