import * as React from 'react';

import { RecentSearches } from './RecentSearches/RecentSearches';
import { SelectLocation } from './SelectLocation/SelectLocation';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export const Output = () => (
  <>
    <RecentSearches />
    <SelectLocation />
    <ErrorMessage />
  </>
);
