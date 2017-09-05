import React, { PropTypes } from 'react';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import { fullBlack, teal500 } from 'material-ui/styles/colors';
import Checkbox from 'material-ui/Checkbox';
import { SHOW_TYPE_ALL, SHOW_TYPE_COMPLETED } from '../common/Constants';

const Component = props => (<div>
  <Checkbox
    checked={props.showType === SHOW_TYPE_COMPLETED}
    checkedIcon={
      <CheckIcon
        color={props.showType !== SHOW_TYPE_COMPLETED ? teal500 : fullBlack}
      />}
    label="Show Completed Items"
    onCheck={(event, isInputChecked) => props.onShowTypeChange(isInputChecked)}
  />
</div>);

Component.propTypes = {
  onShowTypeChange: PropTypes.func,
  showType: PropTypes.string,
};

Component.defaultProps = {
  showType: SHOW_TYPE_ALL,
  onShowTypeChange: () => {},
};

export default Component;
