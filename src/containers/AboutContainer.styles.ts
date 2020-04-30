import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  container: {
    '&:after': {
      backgroundImage: `url('https://github.com/sff1019/my-portfolio/blob/master/src/assets/abstract_header.png?raw=true')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      bottom: '0',
      content: "''",
      left: '0',
      opacity: '0.1',
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: '-1',
    },
    '@media (min-width: 960px)': {
      height: '100vh',
    },
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  mobileToolbar: {
    '@media (min-width: 960px)': {
      visibility: 'hidden',
    },
  },
  translateButton: {
    fontSize: '0.8rem',
  },
});

export type Styles = WithStyles<typeof styles>;
