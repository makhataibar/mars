import React from 'react';
import { ModeLayout } from '../mode-layout/mode-layout';
import { Formik } from 'formik';
import { createReceptionInitialValues } from './create-reception-initial-values';
import { ReceptionInfo } from '../reception-info/reception-info';
import { SelectComponentDialog } from './select-component.dialog';
import { SelectedComponentList } from './selected-component-list';

export const Create = () => {
  return (
    <Formik initialValues={createReceptionInitialValues}>
      {({ values }) => (
        <>
          <ModeLayout
            left={<SelectedComponentList />}
            right={<ReceptionInfo />}
          />
          <SelectComponentDialog />
        </>
      )}
    </Formik>
  );
};
