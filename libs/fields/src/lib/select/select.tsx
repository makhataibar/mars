import React, { ChangeEvent } from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import { useField } from 'formik';
import { FieldPropsInterface } from '../field-props.interface';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';

export interface SelectItemProps {
  value: string | number;
}
export interface SelectProps extends FieldPropsInterface<TextFieldProps> {
  items: SelectItemProps[];
}

export const Select = (props: SelectProps) => {
  const [field, meta, helpers] = useField(props.fieldName);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    helpers.setValue(event.target.value);
  };

  return (
    <TextField
      onChange={handleChange}
      value={field.value}
      {...props.componentProps}
      select
    >
      {props.items.map(itemProps => (
        <MenuItem {...itemProps} />
      ))}
    </TextField>
  );
};
