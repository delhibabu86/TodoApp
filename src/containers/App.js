import { connect } from 'react-redux';
import App from '../components/App';
import { addItem, changeItemType, deleteItem } from '../actions/todo';
import { changeThemeAction, changeShowType, changeText } from '../actions/other';

const mapStateToProps =
      ({ themeName, showType, text, items }) => ({ themeName, showType, text, items });

const mapDispatchToProps = dispatch => ({
  addItem: text => dispatch(addItem(text)),
  onShowTypeChange: type => dispatch(changeShowType(type)),
  onThemeChange: () => dispatch(changeThemeAction()),
  onItemClick: (index, isSelected) => dispatch(changeItemType(index, isSelected)),
  onDelete: index => dispatch(deleteItem(index)),
  onTextChange: text => dispatch(changeText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
