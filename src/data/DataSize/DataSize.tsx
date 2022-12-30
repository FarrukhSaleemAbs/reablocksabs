import React, { FC, Fragment } from 'react';
import { formatSize, FormatSizeTypes } from './utils';

export interface DataSizeProps {
  /**
   * The size value to render.
   */
  size: FormatSizeTypes;
}

export const DataSize: FC<DataSizeProps> = ({ size }) => (
  <Fragment>{formatSize(size)}</Fragment>
);