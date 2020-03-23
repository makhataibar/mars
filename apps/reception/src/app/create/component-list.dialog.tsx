import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import { ComponentList } from './component-list';
import { FieldIdentifier } from '../fields/fields';

export interface ComponentListDialogProps {
  onSelect: (field: FieldIdentifier) => void;
  onClose: () => void;
  open: boolean;
}

const selectedComponentInitialState = FieldIdentifier.TextField;

export const ComponentListDialog = (props: ComponentListDialogProps) => {
  const [selectedComponent, setSelectedComponent] = useState<FieldIdentifier>(
    selectedComponentInitialState
  );

  const handleSelect = () => {
    props.onSelect(selectedComponent);
    props.onClose();
    setSelectedComponent(selectedComponentInitialState);
  };
  const handleCloseDialog = () => {
    setSelectedComponent(selectedComponentInitialState);
    props.onClose();
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleCloseDialog}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>Список компонентов</DialogTitle>
      <DialogContent dividers>
        <ComponentList
          onChange={setSelectedComponent}
          value={selectedComponent}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSelect} variant="contained" color="primary">
          Выбрать
        </Button>
      </DialogActions>
    </Dialog>
  );
};
