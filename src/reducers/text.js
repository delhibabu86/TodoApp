import { CHANGE_TEXT } from '../actions/other';

export default (text = '', action) => {
  let newState = text;
  const { type } = action;
  switch (type) {
    case CHANGE_TEXT:
      newState = action.text;
      break;
    default:
      newState = text;
      break;
  }
  return newState;
};
