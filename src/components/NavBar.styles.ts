import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  closeMenu: {
    '@media (max-width: 960px)': {
      minHeight: '56px',
      paddingTop: 0,
    },
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
  container: {
    '@media (max-width: 960px)': {
      display: 'none',
    },
    padding: '1rem 5rem',
    position: 'relative',
  },
  emptyContainer: {
    flexGrow: 1,
  },
  mobileAppBar: {
    background: 'white',
    color: 'black',
  },
  menuButton: {
      marginRight: theme.spacing(2),
  },
  mobileContainer: {
    '@media (min-width: 960px)': {
      display: 'none',
    },
  },
  mobileNavItemText: {
    cursor: 'pointer',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    textAlign: 'center',
  },
  navItem: {
    paddingLeft: '0',
    textAlign: 'center',
  },
  navText: {
    '&:after': {
      '-moz-transform': 'translateX(-20px)',
      '-webkit-transform': 'translateX(-20px)',
      content: "']'",
      marginLeft: '10px',
      transform: 'translateX(-20px)',
    },
    '&:before': {
      '-moz-transform': 'translateX(20px)',
      '-webkit-transform': 'translateX(20px)',
      content: "'['",
      marginRight: '10px',
      transform: 'translateX(20px)',
    },
    '&:before, &:after': {
      '-moz-transition': '-moz-transform 0.3s, opacity 0.2s',
      '-webkit-transition': '-webkit-transform 0.3s, opacity 0.2s',
      display: 'inline-block',
      opacity: '0',
      transition: 'transform 0.3s, opacity 0.2s',
    },
    '&:hover, &:focus': {
      color: 'black',
      outline: 'none',
    },
    '&:hover:before, &:hover:after, &:focus:before, &:focus:after': {
      '-moz-transform': 'translateX(0px)',
      '-webkit-transform': 'translateX(0px)',
      opacity: '1',
      transform: 'translateX(0px)',
    },
    color: 'gray',
    cursor: 'pointer',
    fontWeight: 500,
    position: 'relative',
  },
  toolbarContainer: {
    flexGrow: 1,
  },
  translate: {
    '@media (max-width: 960px)': {
      display: 'none',
    },
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    position: 'absolute',
    right: '0',
    top: '0',
    width: 'fit-content',
  },
  translateButton: {
    fontSize: '0.8rem',
  },
});

export type Styles = WithStyles<typeof styles>;
