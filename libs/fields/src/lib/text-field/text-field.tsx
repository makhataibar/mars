import React, { ChangeEvent } from 'react';
import { FieldPropsInterface } from '../field-props.interface';
import { useField } from 'formik';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import { TextFieldComponent } from './text-field.component';

export const TextField = (props: FieldPropsInterface<TextFieldProps>) => {
  const [field, meta, helpers] = useField(props.fieldName);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    helpers.setValue(event.target.value);
  };

  return (
    <TextFieldComponent
      {...props.componentProps}
      value={field.value}
      onChange={handleChange}
      error={!!meta.error}
      helperText={meta.error}
    />
  );
};
