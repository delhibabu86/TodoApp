import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LightbulbOutlineIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import { black500, white500 } from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { List } from 'immutable';
import Input from './Input';
import ShowType from './ShowType';
import ToDoItem from './ToDoItem';
import { lightTheme, darkTheme, SHOW_TYPE_ALL } from '../common/Constants';

const Component = (props) => {
  const { text, addItem, onShowTypeChange, items, onTextChange, showType,
    onItemClick, onDelete, themeName, onThemeChange } = props;
  const inputProps = { text, addItem, onTextChange };
  const showTypeProps = { onShowTypeChange, showType };
  const toDoItemProps = { items, showType, onItemClick, onDelete };

  const isDarkTheme = () => themeName === darkTheme;
  return (
    <MuiThemeProvider
      muiTheme={getMuiTheme(isDarkTheme() ? darkBaseTheme : lightBaseTheme)}
    >
      <div>
        <AppBar
          title="ToDo App"
          iconElementLeft={
            <IconButton
              onClick={() => onThemeChange()}
            >
              <LightbulbOutlineIcon
                color={isDarkTheme() ? black500 : white500}
              />
            </IconButton>}
        />
        <Paper
          style={{
            width: '100%',
            minHeight: 100,
            display: 'inline-block',
            padding: 20,
          }}
          zDepth={5}
        >
          <div style={{ display: 'inline-block', textAlign: 'center' }}>
            <Input {...inputProps} />
          </div>
          <div style={{ display: 'inline' }}>
            <ShowType {...showTypeProps} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <ToDoItem {...toDoItemProps} />
          </div>
        </Paper>
      </div>
    </MuiThemeProvider>
  );
};

Component.propTypes = {
  themeName: PropTypes.string,
  showType: PropTypes.string,
  text: PropTypes.string,
  items: PropTypes.array,
  addItem: PropTypes.func,
  onShowTypeChange: PropTypes.func,
  onThemeChange: PropTypes.func,
  onItemClick: PropTypes.func,
  onDelete: PropTypes.func,
  onTextChange: PropTypes.func,
};

Component.defaultProps = {
  themeName: lightTheme,
  showType: SHOW_TYPE_ALL,
  text: '',
  items: List(),
  addItem: () => {},
  onShowTypeChange: () => {},
  onThemeChange: () => {},
  onItemClick: () => {},
  onDelete: () => {},
  onTextChange: () => {},
};

export default Component;
