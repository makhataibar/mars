import React from 'react';
import { FieldIdentifier } from '../fields/fields';
import { TextFieldFill } from './textfield.fill';

export interface ComponentFillBuilderProps {
  field: FieldIdentifier;
}

export type ComponentFills = {
  [key in FieldIdentifier]: () => JSX.Element;
};
export const componentFills: ComponentFills = {
  [FieldIdentifier.TextField]: TextFieldFill
};

export const ComponentFillBuilder = (props: ComponentFillBuilderProps) => {
  const ComponentFill = componentFills[props.field];
  return <ComponentFill />;
};
