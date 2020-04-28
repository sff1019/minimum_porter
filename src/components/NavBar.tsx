import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Link } from 'react-scroll';

import navBarData from '../data/navBarData.json';
import { Styles, styles } from './NavBar.styles';

interface Props {
  onClick(): void;
  translationButton(): React.ReactNode;
}

class NavBar extends React.Component<Props & Styles> {
  render() {
    const {
      classes,
      onClick,
      translationButton,
    } = this.props;

    return (
      <div>
        <List component="nav" className={classes.container}>
          <ListItem component="div">
            {navBarData.map((data, num) => (
              <ListItemText inset key={num} className={classes.navItem}>
                <Link to={data.id} smooth={true} className={classes.navText}>
                  {data.content}
                </Link>
              </ListItemText>
            ))}
          </ListItem >
        </List>
        <div className={classes.translate}>
          <Button
            onClick={onClick}
            className={classes.translateButton}
          >
            {translationButton()}
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
