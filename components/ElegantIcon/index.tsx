import React from 'react';
import { ElegIconWrapper } from './styled';

type ElegIconType = React.FC<{
  className?: string;
  dataIcon: string;
}>;

export const ElegIcon: ElegIconType = ({ className, dataIcon }) => (
  <ElegIconWrapper aria-hidden="true" data-icon={dataIcon} />
);
