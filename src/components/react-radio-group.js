import './style.scss';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactSelectedItems, ReactSelectedItem} from 'react-selected-items';


export default class extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    valueKey: PropTypes.string,
    textKey: PropTypes.string,
  };

  static defaultProps = {
    items: [],
    valueKey: 'value',
    textKey: 'text'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {className, items, valueKey, textKey, ...props} = this.props;
    return (
      <ReactSelectedItems
        {...props}
        type='radio'
        className={classNames('react-radio-group', className)}>
        {items.map((item, index) => {
          const {selected, ...props} = item;
          const value = item[valueKey];
          const text = item[textKey];
          delete props[valueKey];
          delete props[textKey];

          return (
            <ReactSelectedItem
              { ...props}
              selected={selected}
              className="react-radio-item"
              key={index}
              value={value}>{text}
              <em className="right"/></ReactSelectedItem>
          );
        })}
      </ReactSelectedItems>
    );
  }
}
