import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const rootStyles = (theme: Theme) => createStyles({
  contentContainer: {
    '@media (max-width: 960px)': {
      margin: '20px',
    },
    '@media (min-width: 960px)': {
      paddingLeft: '10px',
    },
    width: '100%',
  },
  contentDescription: {
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    fontSize: '1rem',
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  contentSubTitle: {
    '&:before': {
      '@media (max-width: 600px)': {
        height: '0.4rem',
        top: '2.5rem',
      },
      background: '#90a4ae',
      bottom: '5px',
      content: "''",
      height: '0.7rem',
      position: 'absolute',
      top: '3rem',
      width: '100%',
      zIndex: -1,
    },
    '@media (max-width: 1280px)': {
      margin: '0 auto',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width: 1280px)': {
      marginLeft: theme.spacing(2),
    },
    fontSize: '2rem',
    fontWeight: 500,
    paddingTop: theme.spacing(2),
    position: 'relative',
    width: 'fit-content',
    zIndex: 2,
  },
  contentTitle: {
    '&:before': {
      '@media (max-width: 600px)': {
        height: '0.6rem',
        top: '2rem',
      },
      background: '#607d8b',
      bottom: '5px',
      content: "''",
      height: '0.9rem',
      position: 'absolute',
      top: '3rem',
      width: '100%',
      zIndex: -1,
    },
    '@media (max-width: 1280px)': {
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
    '@media (min-width: 1280px)': {
      marginLeft: theme.spacing(2),
    },
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0 auto',
    position: 'relative',
    width: 'fit-content',
    zIndex: 2,
  },
  sideImage: {
    '@media (max-width: 1280px)': {
      display: 'block',
      height: '60%',
      margin: '0 auto',
      objectFit: 'cover',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(2),
      position: 'relative',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '80%',
    },
    '@media (min-width: 1280px)': {
      bottom: '0',
      height: '70%',
      left: '0',
      margin: 'auto',
      objectFit: 'cover',
      position: 'absolute',
      right: '0',
      top: '0',
      width: '70%',
    },
  },
  sideImageContainer: {
    position: 'relative',
  },
  title: {
    '@media (max-width: 600px)': {
      fontSize: '3rem',
    },
    fontFamily: "'Noto Serif JP', serif",
    fontSize: '4rem',
    fontWeight: 'bold',
  },
  link: {
    color: 'black',
  }
});

export type RootStyles = WithStyles<typeof rootStyles>;
