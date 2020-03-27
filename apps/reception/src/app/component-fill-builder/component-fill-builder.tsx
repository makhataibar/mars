import React from 'react';
import { FieldIdentifier } from '../fields/fields';

export interface ComponentFillBuilderProps {
  field: FieldIdentifier;
}

export const ComponentFillBuilder = (props: ComponentFillBuilderProps) => {
  return (
    <div>
      <h1>Welcome to component-fill-builder component!</h1>
    </div>
  );
};
