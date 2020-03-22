import React from 'react';
import { ModeLayout } from '../mode-layout/mode-layout';
import { FieldList } from '../fields/field-list';
import { Formik } from 'formik';
import { createReceptionInitialValues } from './create-reception-initial-values';
import { ReceptionInfo } from '../reception-info/reception-info';

export const Create = () => {
  return (
    <Formik initialValues={createReceptionInitialValues}>
      {() => <ModeLayout left={<FieldList />} right={<ReceptionInfo />} />}
    </Formik>
  );
};
