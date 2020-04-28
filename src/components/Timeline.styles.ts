import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  body: {
    '@media (max-width: 600px)': {
      padding: '1em 1em 0 1em',
      top: '-1em',
      width: '90%',
    },
    padding: '2em 2em 0 2em',
    position: 'relative',
    top: '-2.075em',
    width: '95%',
  },
  container: {
    letterSpacing: '0.05em',
    lineHeight: '1.5',
  },
  date: {
    '@media (max-width: 600px)': {
      fontSize: '0.7rem',
      padding: '0.25em 1em 0.2em 1em',
      textAlign: 'center',
      width: theme.spacing(9),
    },
    display: 'block',
    margin: 0,
    padding: '0.25em 1.2em 0.2em 1em',
    position: 'absolute',
    textAlign: 'right',
    transform: 'translateX(-100%)',
    width: theme.spacing(15),
  },
  dateMobile: {
    fontSize: '0.7rem',
  },
  description: {
    '@media (max-width: 600px)': {
      fontSize: '0.85rem',
    },
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
  event: {
    '@media (max-width: 600px)': {
      width: '98%',
    },
    position: 'relative',
  },
  eventTitle: {
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  icon: {
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'block',
    height: '0.8em',
    margin: '0.44em 0.44em 0.44em -0.44em',
    outline: '10px solid white',
    position: 'absolute',
    top: '0',
    width: '0.8em',
  },
  list: {
    listStyle: 'circle !important',
    listStyleType: 'circle !important',
    padding: '0',
  },
  listItem: {
    display: 'list-item',
    padding: '0',
  },
  listItemText: {
    padding: '0',
  },
  timeline: {
    '&:before': {
      backgroundColor: 'black',
      content: "''",
      height: '100%',
      marginLeft: '-1px',
      position: 'absolute',
      top: '0',
      width: '1.5px',
    },
    '@media (max-width: 1280px)': {
      width: '80%',
    },
    '@media (max-width: 600px)': {
      paddingLeft: '5.5em',
      width: 'auto',
    },
    listStyle: 'none',
    maxWidth: '90%',
    paddingLeft: '7em',
    paddingTop: '1em',
    position: 'relative',
  },
});

export type Styles = WithStyles<typeof styles>
