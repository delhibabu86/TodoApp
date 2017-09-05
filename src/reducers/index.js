import { combineReducers } from 'redux';
import themeName from './themeReducer';
import items from './items';
import showType from './showType';
import text from './text';

export default combineReducers({
  items,
  themeName,
  showType,
  text,
});
