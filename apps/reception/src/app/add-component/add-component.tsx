import React, { useState } from 'react';
import { AddComponentStepper, Step } from './add-component.stepper';
import { ComponentSelectStep } from './component-select.step';
import { FieldIdentifier } from '../fields/fields';
import { ComponentFillStep } from './component-fill.step';
import { ComponentInterface } from './component.interface';

/* eslint-disable-next-line */
export interface AddComponentProps {}

export const AddComponent = (props: AddComponentProps) => {
  const [selectedComponent, setSelectedComponent] = useState<FieldIdentifier>(
    FieldIdentifier.TextField
  );

  const handleFill = (component: ComponentInterface) => {
    console.log(component);
  };

  const handleFinish = () => {};

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
        <ComponentFillStep field={selectedComponent} onFill={handleFill} />
      )
    }
  ];

  return <AddComponentStepper steps={steps} onFinish={handleFinish} />;
};
