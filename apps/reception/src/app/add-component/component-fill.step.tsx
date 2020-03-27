import React from 'react';
import { FieldIdentifier, fields } from '../fields/fields';
import { ComponentInterface } from './component.interface';
import { componentsInitialValues } from './components-initial-values';
import { Formik } from 'formik';
import { ComponentFillBuilder } from '../component-fill-builder/component-fill-builder';

export interface ComponentFillStepProps {
  field: FieldIdentifier;
  onFill: (component: ComponentInterface) => void;
}

export const ComponentFillStep = (props: ComponentFillStepProps) => {
  const { identifier } = fields.find(
    value => value.identifier === props.field
  );
  const initialValues = componentsInitialValues[identifier];

  return (
    <Formik initialValues={initialValues}>
      {() => <ComponentFillBuilder field={identifier} />}
    </Formik>
  );
};
