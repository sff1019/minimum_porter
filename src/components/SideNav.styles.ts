import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  currentContent: {
    fontWeight: 'bold',
  },
  hideNav: {
    display: 'none',
  },
  itemLink: {
    '&:before': {
      '-webkit-transform': 'scaleX(0)',
      '-webkit-transition': 'all 0.3s ease-in-out 0s',
      backgroundColor: 'black',
      bottom: '0',
      content: "''",
      height: '1px',
      position: 'absolute',
      transform: 'scaleX(0)',
      transition: 'all 0.3s ease-in-out 0s',
      visibility: 'hidden',
      width: '100%',
    },
    '&:hover': {
      color: 'black',
    },
    '&:hover:before': {
      '-webkit-transform': 'scaleX(1)',
      backgroundColor: 'black',
      transform: 'scaleX(1)',
      visibility: 'visible',
    },
    color: 'gray',
    cursor: 'pointer',
    paddingBottom: '5px',
    position: 'relative',
  },
  navItem: {
    margin: '5px 0',
    textAlign: 'center',
  },
  showNav: {
    display: 'initial',
  },
  sideNavContext: {
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '16.5%',
  },
});

export type Styles = WithStyles<typeof styles>;
