import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { ContentActions } from './actions';

export interface State {
  contactVisible: boolean;
  currentContent: string;
  educationVisible: boolean;
  experienceVisible: boolean;
  isMobileMenuOpen: boolean;
  locale: string;
  researchVisible: boolean;
}

export const initialState: State = {
  contactVisible: false,
  currentContent: 'about',
  educationVisible: false,
  experienceVisible: false,
  isMobileMenuOpen: false,
  locale: 'en',
  researchVisible: false,
};

export const Reducer = reducerWithInitialState(initialState)
  .case(ContentActions.openMobileMenu, (state, value) => {
    return { ...state, isMobileMenuOpen: value };
  })
  .case(ContentActions.updateCurrentContent, (state, value) => {
    return { ...state, currentContent: value };
  })
  .case(ContentActions.updateEducationVisibility, (state, visible) => {
    return { ...state, educationVisible: visible };
  })
  .case(ContentActions.updateExperienceVisibility, (state, visible) => {
    return { ...state, experienceVisible: visible };
  })
  .case(ContentActions.updateLocale, (state, value) => {
    return { ...state, locale: value };
  })
  .case(ContentActions.updateResearchVisibility, (state, visible) => {
    return { ...state, researchVisible: visible };
  })
  .case(ContentActions.updateContactVisibility, (state, visible) => {
    return { ...state, contactVisible: visible };
  });
