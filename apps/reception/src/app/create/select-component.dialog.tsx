import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { FieldIdentifier } from '../fields/fields';
import { ComponentListDialog } from './component-list.dialog';
import { useField } from 'formik';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    }
  })
);

export const SelectComponentDialog = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [field, meta, helpers] = useField('components');

  const handleSelect = (selectedField: FieldIdentifier) => {
    helpers.setValue([...field.value, selectedField])
  };

  return (
    <>
      <Fab
        className={classes.fab}
        color="primary"
        variant="extended"
        onClick={() => setOpenDialog(true)}
      >
        <AddIcon className={classes.extendedIcon} />
        Добавить компонент
      </Fab>
      <ComponentListDialog
        onClose={() => setOpenDialog(false)}
        open={openDialog}
        onSelect={handleSelect}
      />
    </>
  );
};
