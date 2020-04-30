import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { Link } from 'react-scroll';

import navBarData from '../data/navBarData.json';
import { Styles, styles } from './NavBar.styles';

interface Props {
  isMobileMenuOpen: boolean;
  handleMobileMenu(isOpen: boolean): void;
  onTranslationClick(): void;
  translationButton(): React.ReactNode;
}

class NavBar extends React.Component<Props & Styles> {
  render() {
    const {
      classes,
      handleMobileMenu,
      isMobileMenuOpen,
      onTranslationClick,
      translationButton,
    } = this.props;

    const onChange = (isOpen: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
      handleMobileMenu(isOpen);
    }

    const onClick = () => handleMobileMenu(false);

    return (
      <div className={classes.mobileContainer}>
        <AppBar elevation={0} className={classes.mobileAppBar} >
          <Toolbar className={classes.toolbarContainer}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={onChange(true)}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.emptyContainer} />
            <Button
              onClick={onTranslationClick}
              className={classes.translateButton}
            >
              {translationButton()}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer open={isMobileMenuOpen} onClose={onChange(false)}>
          <div onClick={onChange(false)} onKeyDown={onChange(false)}>
            <List>
              <ListItem className={classes.closeMenu}>
                <IconButton edge='end' aria-label='close' onClick={onChange(false)}>
                  <ChevronLeftIcon />
                </IconButton>
              </ListItem>
              <Divider />
              {navBarData.map((data, num) => (
                <ListItem key={num}>
                  <ListItemText inset className={classes.mobileNavItemText}>
                    <Link to={data.id} smooth={true} onClick={onClick}>
                      {data.content}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <Toolbar />
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
