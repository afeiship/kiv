import './style.scss';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import ReactSelectedItems from 'react-selected-items';
import ReactRadioItem from './react-radio-item';


export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  _onChange() {
    console.log('change...');
  }

  render() {
    const {className, ...props} = this.props;
    return (
      <ReactSelectedItems type='single' {...props}
                          className={classNames('react-radio-group', className)}>
        {this.props.children || <ReactRadioItem />}
      </ReactSelectedItems>
    );
  }
}
