import * as React from 'react';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-scroll';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

import { Styles, styles } from './SideNav.styles';
import navBarData from '../data/navBarData.json';

interface Props {
  currentContent: string
}

class SideNav extends React.Component<Props & Styles> {
  readonly state = {
    scrollPosition: this.getScrollPosition(),
    showNav: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    let show = false;
    if (winScroll > window.innerHeight*0.6) {
      show = true
    }

    this.setState({
      scrollPosition: winScroll,
      showNav: show,
    })
  };

  getScrollPosition() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  render() {
    const {
      classes,
      currentContent,
    } = this.props;

    const classCurrentContent = (id: string) => {
      if (id === currentContent) {
        return classes.currentContent
      } else {
        return classes.itemLink
      }
    }

    return (
      <div className={classes.sideNavContext}>
        <Slide direction='right' in={this.state.showNav} timeout={300}>
          <List component="nav">
            {navBarData.map((data, num) => (
              <ListItem component="div" key={num}>
                <ListItemText className={classes.navItem}>
                  <Link to={data.id} smooth={true} className={classCurrentContent(data.id)}>
                    {data.content}
                  </Link>
                </ListItemText>
              </ListItem >
            ))}
          </List>
        </Slide>
      </div>
    );
  }
}

export default withStyles(styles)(SideNav);
