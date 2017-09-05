export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const CHANGE_SHOW_TYPE = 'CHANGE_SHOW_TYPE';

export const changeText = text => ({
  type: CHANGE_TEXT,
  text,
});

export const changeThemeAction = () => ({
  type: CHANGE_THEME,
});

export const changeShowType = isSelected => ({
  type: CHANGE_SHOW_TYPE,
  isSelected,
});
