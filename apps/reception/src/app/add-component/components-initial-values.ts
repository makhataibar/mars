import { FieldIdentifier } from '../fields/fields';

export interface TextFieldInitialValues {
  label: string;
  initialValue: string;
  isRequired: boolean;
}

export type ComponentsInitialValues = {
  [key in FieldIdentifier]: TextFieldInitialValues;
};

export const componentsInitialValues: ComponentsInitialValues = {
  [FieldIdentifier.TextField]: {
    initialValue: '',
    isRequired: true,
    label: ''
  }
};
