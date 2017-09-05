export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const COMPLETED = 'COMPLETED';

export const addItem = text => ({
  type: ADD,
  text,
});

export const deleteItem = index => ({
  type: DELETE,
  index,
});

export const changeItemType = (index, isSelected) => ({
  type: COMPLETED,
  index,
  isSelected,
});
