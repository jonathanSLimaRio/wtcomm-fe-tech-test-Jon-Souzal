import React from 'react';
import {
  Typography as MaterialTypography,
  TypographyProps,
} from '@material-ui/core';

export const Typography = (props: TypographyProps) => {
  return <MaterialTypography {...props}>{props.children}</MaterialTypography>;
};

export default Typography;
