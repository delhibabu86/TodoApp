import { CHANGE_SHOW_TYPE } from '../actions/other';
import { SHOW_TYPE_ALL, SHOW_TYPE_COMPLETED } from '../common/Constants';

export default (showType = SHOW_TYPE_ALL, action) => {
  let newState = showType;
  const { type, isSelected } = action;
  switch (type) {
    case CHANGE_SHOW_TYPE:
      newState = isSelected ? SHOW_TYPE_COMPLETED : SHOW_TYPE_ALL;
      break;
    default:
      newState = showType;
      break;
  }
  return newState;
};
