import React, { ChangeEvent } from 'react';
import {
  CheckboxComponent,
  CheckboxComponentProps
} from './checkbox.component';
import { FieldPropsInterface } from '../field-props.interface';
import { useField } from 'formik';

export const Checkbox = (
  props: FieldPropsInterface<CheckboxComponentProps>
) => {
  const [field, meta, helpers] = useField(props.fieldName);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    helpers.setValue(checked);
  };

  return (
    <CheckboxComponent
      checked={field.value}
      onChange={handleChange}
      {...props.componentProps}
    />
  );
};
