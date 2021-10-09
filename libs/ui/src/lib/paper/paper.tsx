import React from 'react';
import { Paper as MaterialPaper, PaperProps } from '@material-ui/core';

export const Paper = (props: PaperProps) => {
  return <MaterialPaper {...props}>{props.children}</MaterialPaper>;
};

export default Paper;
