import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { Styles, styles } from './FooterContainer.styles';

class FooterContainer extends React.Component<Styles> {
  render = () => {
    const { classes } = this.props;
    return (
      <Paper className={classes.footerContainer}>
        <Typography className={classes.footerText}>
          Made with ❤︎ by sff1019< br/>Copyright 2020.
        </Typography>
      </Paper>
    );
  }
}


export default withStyles(styles)(FooterContainer);
