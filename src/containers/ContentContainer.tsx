import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ContentActions } from "../actions";
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Research from '../components/Research';
import SideNav from '../components/SideNav';
import { AppState } from "../store";
import { Styles, styles } from './ContentContainer.styles';

export interface Handlers {
  handleContactVisibility(visible: boolean): void;
  handleCurrentContent(value: string): void;
  handleEducationVisibility(visible: boolean): void;
  handleExperienceVisibility(visible: boolean): void;
  handleResearchVisibility(visible: boolean): void;
  handleMobileMenu(isOpen: boolean): void;
}

interface Props {
  contactVisible: boolean;
  currentContent: string;
  educationVisible: boolean;
  experienceVisible: boolean;
  locale: string;
  researchVisible: boolean;
}

class ContentContainer extends React.Component<Handlers & Props & Styles> {
  render = () => {
    const {
      classes,
      currentContent,
      handleCurrentContent,
      handleEducationVisibility,
      handleExperienceVisibility,
      handleResearchVisibility,
      handleContactVisibility,
      locale,
    } = this.props;

    return (
      <div>
        <Paper elevation={0}>
          <Grid container>
            <Grid item sm={2} xs={12} className={classes.sideNavContainer}>
              <SideNav
                currentContent={currentContent}
              />
            </Grid>
            <Divider orientation="vertical" flexItem className={classes.dividerWidth} />
            <Grid item xs={12} sm container>
              <Education
                locale={locale}
                updateVisibility={handleEducationVisibility}
                updateCurrentContent={handleCurrentContent}
              />
              <Experience
                locale={locale}
                updateVisibility={handleExperienceVisibility}
                updateCurrentContent={handleCurrentContent}
              />
              <Research
                locale={locale}
                updateVisibility={handleResearchVisibility}
                updateCurrentContent={handleCurrentContent}
              />
              <Contact
                updateVisibility={handleContactVisibility}
                updateCurrentContent={handleCurrentContent}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (appState: AppState) => {
  return {
    contactVisible: appState.state.contactVisible,
    currentContent: appState.state.currentContent,
    educationVisible: appState.state.educationVisible,
    experienceVisible: appState.state.experienceVisible,
    locale: appState.state.locale,
    researchVisible: appState.state.researchVisible,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Handlers => ({
  handleContactVisibility: (visible: boolean) => {
    dispatch(ContentActions.updateContactVisibility(visible));
  },
  handleCurrentContent: (value: string) => {
    dispatch(ContentActions.updateCurrentContent(value));
  },
  handleEducationVisibility: (visible: boolean) => {
    dispatch(ContentActions.updateEducationVisibility(visible));
  },
  handleExperienceVisibility: (visible: boolean) => {
    dispatch(ContentActions.updateExperienceVisibility(visible));
  },
  handleMobileMenu: (isOpen: boolean) => {
    dispatch(ContentActions.openMobileMenu(isOpen));
  },
  handleResearchVisibility: (visible: boolean) => {
    dispatch(ContentActions.updateResearchVisibility(visible));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ContentContainer));
