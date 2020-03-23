import { FieldIdentifier } from '../fields/fields';

export interface CreateReceptionValues {
  name: string;
  components: FieldIdentifier[]
}

export const createReceptionInitialValues: CreateReceptionValues = {
  name: '',
  components: []
};
