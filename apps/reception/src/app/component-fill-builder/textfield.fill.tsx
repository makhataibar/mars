import React from 'react';
import { Card, Grid, CardHeader, CardContent } from '@material-ui/core';
import { TextFieldInitialValues } from '../add-component/components-initial-values';
import { Checkbox, TextField, TextFieldComponent } from '@mars/fields';
import { useFormikContext } from 'formik';

export const TextFieldFillFieldsName: {
  [key in keyof TextFieldInitialValues]: string;
} = {
  label: 'label',
  isRequired: 'isRequired',
  initialValue: 'initialValue'
};
export const TextFieldFill = () => {
  const { values } = useFormikContext<TextFieldInitialValues>();
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Card>
          <CardHeader title="Предпросмотр" />
          <CardContent>
            <TextFieldComponent
              label={values.label}
              value={values.initialValue}
              error={values.isRequired}
              helperText={values.isRequired && 'Обязательное поле'}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <TextField
          fieldName={TextFieldFillFieldsName.label}
          componentProps={{ label: 'Ярлык' }}
        />
      </Grid>
      <Grid item>
        <TextField
          fieldName={TextFieldFillFieldsName.initialValue}
          componentProps={{ label: 'Значение по умолчанию' }}
        />
      </Grid>
      <Grid item>
        <Checkbox
          fieldName={TextFieldFillFieldsName.isRequired}
          componentProps={{ label: 'Обязательное поле' }}
        />
      </Grid>
    </Grid>
  );
};
