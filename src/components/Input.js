import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui/svg-icons/content/add';
import { green500, orange500 } from 'material-ui/styles/colors';

const Component = props => (<div>
  <TextField
    placeholder="Enter Todo text"
    name="enterTodoText"
    value={props.text}
    onKeyUp={e => e.keyCode === 13 && props.addItem(props.text)}
    onInput={e => props.onTextChange(e.target.value)}
  />
  <IconButton
    tooltip="Add ToDo"
    touch
    onClick={() => props.text && props.addItem(props.text)}
    tooltipPosition="bottom-center"
  >
    <AddIcon color={green500} hoverColor={orange500} />
  </IconButton>
</div>);

Component.propTypes = {
  text: PropTypes.string,
  addItem: PropTypes.func,
  onTextChange: PropTypes.func,
};

Component.defaultProps = {
  text: '',
  addItem: () => {},
  onTextChange: () => {},
};

export default Component;
