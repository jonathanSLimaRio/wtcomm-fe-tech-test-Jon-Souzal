import React, { PropsWithChildren } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export interface DetailsBoxProps {
  summaryDescription: string;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    details: {
      cursor: 'pointer',
    },
  })
);

export const DetailsBox = (props: PropsWithChildren<DetailsBoxProps>) => {
  const { summaryDescription, children } = props;
  const classes = useStyles();
  return (
    <details className={`${classes.details}`}>
      <summary>{summaryDescription}</summary>
      <div>{children}</div>
    </details>
  );
};

export default DetailsBox;
