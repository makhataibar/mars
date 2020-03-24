import React, { useState } from 'react';
import { AddComponentStepper, Step } from './add-component.stepper';
import { ComponentList } from './component-list';
import { FieldIdentifier } from '../fields/fields';

/* eslint-disable-next-line */
export interface AddComponentProps {}

export const AddComponent = (props: AddComponentProps) => {
  const [selectedComponent, setSelectedComponent] = useState<FieldIdentifier>(
    FieldIdentifier.TextField
  );

  const steps: [Step] = [
    {
      title: 'Выберите компонент',
      component: (
        <ComponentList
          value={selectedComponent}
          onChange={setSelectedComponent}
        />
      )
    },
    { title: 'Заполните значения компонента' }
  ];

  return <AddComponentStepper steps={steps} />;
};
