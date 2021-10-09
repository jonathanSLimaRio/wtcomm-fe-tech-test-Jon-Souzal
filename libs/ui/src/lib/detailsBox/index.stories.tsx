import React from 'react';
import { DetailsBox } from './index';

export default {
  component: DetailsBox,
  title: 'DetailsBox',
};

export const primary = () => {
  return (
    <DetailsBox summaryDescription="This is the summary description">
      This is the content
    </DetailsBox>
  );
};
