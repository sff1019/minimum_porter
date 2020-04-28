import { actionCreatorFactory } from '../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

export const ContentActions = {
  openMobileMenu: actionCreator<boolean>('UPDATE_MOBILE_MENU'),
  updateContactVisibility: actionCreator<boolean>('UPDATE_CONTACT_VISIBILITY'),
  updateCurrentContent: actionCreator<string>('UPDATE_CURRENT_CONTENT'),
  updateEducationVisibility: actionCreator<boolean>('UPDATE_EDUCATION_VISIBILITY'),
  updateExperienceVisibility: actionCreator<boolean>('UPDATE_EXPERIENCE_VISIBILITY'),
  updateLocale: actionCreator<string>('UPDATE_LOCALE'),
  updateResearchVisibility: actionCreator<boolean>('UPDATE_RESEARCH_VISIBILITY'),
}
