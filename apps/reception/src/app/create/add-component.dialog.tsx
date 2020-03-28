import React, { useState } from 'react';
import { useField } from 'formik';
import { Field } from '../fields/fields';
import { Dialog, DialogContent, DialogTitle, Fab } from '@material-ui/core';
import { AddComponent } from '../add-component/add-component';
import AddIcon from '@material-ui/icons/Add';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
export const AddComponentDialog = () => {
  const [field, meta, helpers] = useField<Field>('components');
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(true);

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
      <Dialog
        maxWidth="md"
        fullWidth
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>Добавление компонента</DialogTitle>
        <DialogContent dividers>
          <AddComponent />
        </DialogContent>
      </Dialog>
    </>
  );
};
