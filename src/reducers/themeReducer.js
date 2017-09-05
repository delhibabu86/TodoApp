import { lightTheme, darkTheme } from '../common/Constants';
import { CHANGE_THEME } from '../actions/other';

export default (themeName = lightTheme, action) => {
  let newState = themeName;
  const { type } = action;
  switch (type) {
    case CHANGE_THEME:
      newState = (themeName === lightTheme ? darkTheme : lightTheme);
      break;
    default:
      newState = themeName;
      break;
  }
  return newState;
};
