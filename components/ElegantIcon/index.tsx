import React from 'react';
import { ElegIconWrapper } from './styled';

export type ElegIconType = React.FC<{
  className?: string;
  dataIcon: string;
}>;

export const ElegIcon: ElegIconType = ({ className, dataIcon }) => (
  <ElegIconWrapper
    className={className ? `${className}` : ''}
    aria-hidden="true"
    data-icon={dataIcon}
  />
);
