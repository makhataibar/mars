import { FieldIdentifier } from '../fields/fields';
import * as yup from 'yup';
import { ObjectSchema } from 'yup';

export interface TextFieldInitialValues {
  label: string;
  initialValue: string;
  isRequired: boolean;
}

export type ComponentsInitialValues = TextFieldInitialValues;
export interface ComponentFormProps {
  initialValues: ComponentsInitialValues;
  validationSchema: ObjectSchema<ComponentsInitialValues>;
}

export type ComponentsFormProps = {
  [key in FieldIdentifier]: ComponentFormProps;
};

export const componentsInitialValues: ComponentsFormProps = {
  [FieldIdentifier.TextField]: {
    initialValues: {
      initialValue: '',
      isRequired: true,
      label: ''
    },
    validationSchema: yup.object<TextFieldInitialValues>({
      isRequired: yup.boolean().required(),
      initialValue: yup.string().notRequired(),
      label: yup.string().required()
    })
  }
};
