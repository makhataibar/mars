import React, { MutableRefObject } from 'react';
import { FieldIdentifier } from '../fields/fields';
import {
  componentsInitialValues,
  ComponentsInitialValues
} from './components-initial-values';
import { ComponentFillBuilder } from '../component-fill-builder/component-fill-builder';
import { Formik } from 'formik';

export interface ComponentFillStepProps {
  field: FieldIdentifier;
  onFill: (values: ComponentsInitialValues) => void;
  innerRef: MutableRefObject<undefined>;
}

export const ComponentFillStep = (props: ComponentFillStepProps) => {
  return (
    <Formik
      onSubmit={props.onFill}
      innerRef={props.innerRef}
      {...componentsInitialValues[props.field]}
    >
      {() => <ComponentFillBuilder field={props.field} />}
    </Formik>
  );
};
