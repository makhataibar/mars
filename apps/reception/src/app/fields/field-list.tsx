import React, { FunctionComponent } from 'react';
import { FieldIdentifier, fields } from './fields';
import { FieldListRender } from './field-list.render';

export interface FieldListProps {
  filter?: FieldIdentifier[];
  showAll?: boolean;
}

export const FieldList: FunctionComponent<FieldListProps> = props => {
  if (props.showAll) {
    return <FieldListRender fields={fields} />;
  }

  const filteredFields = fields.filter(field =>
    props.filter.includes(field.identifier)
  );
  return <FieldListRender fields={filteredFields} />;
};

FieldList.defaultProps = {
  filter: [],
  showAll: true
};
