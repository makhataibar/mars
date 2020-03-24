import React from 'react';
import { ModeLayout } from '../mode-layout/mode-layout';
import { Formik } from 'formik';
import { createReceptionInitialValues } from './create-reception-initial-values';
import { ReceptionInfo } from '../reception-info/reception-info';
import { SelectedComponentList } from './selected-component-list';
import { AddComponentDialog } from './add-component.dialog';

export const Create = () => {
  return (
    <Formik initialValues={createReceptionInitialValues}>
      {({ values }) => (
        <>
          <ModeLayout
            left={<SelectedComponentList />}
            right={<ReceptionInfo />}
          />
          <AddComponentDialog />
        </>
      )}
    </Formik>
  );
};
