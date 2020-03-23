import { ComponentType } from 'react';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import {
  Select,
  SelectProps,
  TextField,
  FieldPropsInterface
} from '@mars/fields';

export enum FieldIdentifier {
  TextField = 'TextField',
  Select = 'Select'
}
export interface Field {
  identifier: FieldIdentifier;
  field: ComponentType<FieldPropsInterface<TextFieldProps | SelectProps>>;
  defaultProps: FieldPropsInterface<TextFieldProps> | SelectProps;
}

export const fields: Field[] = [
  {
    identifier: FieldIdentifier.TextField,
    field: TextField,
    defaultProps: {
      fieldName: FieldIdentifier.TextField,
      componentProps: {
        label: 'Введите текст по умолчанию',
      },
    }
  },
  {
    identifier: FieldIdentifier.Select,
    field: Select,
    defaultProps: {
      fieldName: FieldIdentifier.Select,
      componentProps: {
        label: 'Выберите значение по умолчанию'
      },
      items: []
    }
  }
];
