import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { connect } from "react-redux";
import ScrollableSection from 'react-update-url-on-scroll';
import { Dispatch } from "redux";

import { ContentActions } from "../actions";
import About from '../components/About';
import MobileNavBar from '../components/MobileNavBar';
import NavBar from '../components/NavBar';
import { AppState } from "../store";
import { Styles, styles } from './AboutContainer.styles';

export interface Handlers {
  handleMobileMenu(isOpen: boolean): void;
  updateLocale(locale: string): void;
}

interface Props {
  locale: string;
  isMobileMenuOpen: boolean;
}

class AboutContainer extends React.Component<Handlers & Props & Styles> {
  render = () => {
    const {
      classes,
      handleMobileMenu,
      locale,
      isMobileMenuOpen,
      updateLocale,
    } = this.props;

    const onClick = () => {
      if (locale === "en") {
        updateLocale('jp');
      } else {
        updateLocale('en');
      }
    }

    const translationButton = () => {
      if (locale === "en") {
        return (
          <span><b>EN</b> / JP</span>
        )
      } else {
        return (
          <span>EN / <b>JP</b></span>
        )
      }
    }

    return (
      <ScrollableSection name={''}>
        <div id="about" className={classes.container}>
          <NavBar
            onClick={onClick}
            translationButton={translationButton}
          />
          <MobileNavBar
            handleMobileMenu={handleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
            onTranslationClick={onClick}
            translationButton={translationButton}
          />
          <About locale={locale} />
        </div>
      </ScrollableSection>
    );
  }
}

const mapStateToProps = (appState: AppState) => {
  return {
    isMobileMenuOpen: appState.state.isMobileMenuOpen,
    locale: appState.state.locale,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleMobileMenu: (isOpen: boolean) => {
    dispatch(ContentActions.openMobileMenu(isOpen));
  },
  updateLocale: (locale: string) => {
    dispatch(ContentActions.updateLocale(locale));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AboutContainer));
