import React, { useRef, useState } from 'react';
import { ComponentSelectStep } from './component-select.step';
import { FieldIdentifier } from '../fields/fields';
import { Step, Stepper, useStepper } from '@mars/stepper';
import { ComponentsFormProps } from './components-initial-values';
import { ComponentFillStep } from './component-fill.step';

/* eslint-disable-next-line */
export interface AddComponentProps {}

export const AddComponent = (props: AddComponentProps) => {
  const [selectedComponent, setSelectedComponent] = useState<FieldIdentifier>(
    FieldIdentifier.TextField
  );
  const componentFillStepRef = useRef();

  const handleFill = (values: ComponentsFormProps[FieldIdentifier]) => {
    console.log(values);
  };

  const steps: Step[] = [
    {
      title: 'Выберите компонент',
      component: (
        <ComponentSelectStep
          value={selectedComponent}
          onChange={setSelectedComponent}
        />
      )
    },
    {
      title: 'Заполните компонент',
      component: (
        <ComponentFillStep
          innerRef={componentFillStepRef}
          field={selectedComponent}
          onFill={handleFill}
        />
      )
    }
  ];
  const [activeStep, handleToggleStep] = useStepper(steps.length);

  const handleFinish = () => {
    componentFillStepRef.current?.handleSubmit();
  };

  return (
    <Stepper
      steps={steps}
      onFinish={handleFinish}
      activeStep={activeStep}
      onToggleStep={handleToggleStep}
    />
  );
};
