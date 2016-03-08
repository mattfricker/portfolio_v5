import { combineReducers } from 'redux';
import portfolio from './portfolio';
import techStack from './techStack';

const homepageApp = combineReducers({
  portfolio,
  techStack
})

export default homepageApp