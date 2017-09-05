import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/content/clear';
import { red200, red500 } from 'material-ui/styles/colors';
import uniqueId from 'lodash/uniqueId';
import { List as ImmutableList } from 'immutable';
import { SHOW_TYPE_ALL, SHOW_TYPE_COMPLETED } from '../common/Constants';

const canShow = (type, showType) => type === showType || showType === SHOW_TYPE_ALL;

const Component = props => (<List>
  {props.items.map((eItem, index) => (<ListItem
    style={{ display: canShow(eItem.type, props.showType) ? 'flex' : 'none' }}
    key={`${uniqueId()}`}
    primaryText={eItem.text}
    leftCheckbox={
      <Checkbox
        checked={eItem.type === SHOW_TYPE_COMPLETED}
        onCheck={(event, isInputChecked) => props.onItemClick(index, isInputChecked)}
      />}
    rightIcon={
      <DeleteIcon
        color={red200}
        hoverColor={red500}
        onClick={() => props.onDelete(index)}
      />}
  />))}
</List>);

Component.propTypes = {
  showType: PropTypes.string,
  items: PropTypes.array,
  /* eslint-disable react/no-unused-prop-types */
  onItemClick: PropTypes.func,
  onDelete: PropTypes.func,
  /* eslint-enable react/no-unused-prop-types */
};

Component.defaultProps = {
  showType: SHOW_TYPE_ALL,
  items: ImmutableList(),
  onItemClick: () => {},
  onDelete: () => {},
};

export default Component;
