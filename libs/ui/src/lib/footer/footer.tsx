import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ExternalButtonLink } from '../../';

const useStyles = makeStyles(({ palette, breakpoints }: Theme) =>
  createStyles({
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      [breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
      backgroundColor: palette.primary.main,
      minHeight: '75px',
      flexWrap: 'wrap',
    },
    button: {
      margin: '10px',
      minWidth: '140px',
    },
  })
);

export const Footer = ({ links = [] }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      {links.map(({ href, text }) => {
        return (
          <ExternalButtonLink
            key={text}
            href={href}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            {text}
          </ExternalButtonLink>
        );
      })}
    </footer>
  );
};

export default Footer;
