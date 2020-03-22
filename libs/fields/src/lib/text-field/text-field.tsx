import React, { ChangeEvent } from 'react';
import { FieldPropsInterface } from '../field-props.interface';
import { useField } from 'formik';
import { TextField as MuiTextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';

export const TextField = (props: FieldPropsInterface<TextFieldProps>) => {
  const [field, meta, helpers] = useField(props.fieldName);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    helpers.setValue(event.target.value);
  };

  return (
    <MuiTextField
      value={field.value}
      onChange={handleChange}
      {...props.componentProps}
    />
  );
};
