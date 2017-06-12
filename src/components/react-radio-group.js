import './style.scss';

import React, {PureComponent} from 'react';
import {ReactSelectedItem, ReactSelectedItems} from 'react-selected-items';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: noop,
  };

  render() {
    const {className, template, items, ...props} = this.props;
    return (
      <ReactSelectedItems type="radio" {...props} className={classNames('react-radio-group', className)}>
        {
          items.map((item, index) => {
            const {selected,disabled} = item;
            return (
              <ReactSelectedItem selected={selected} disabled={disabled} data={item} key={index} className="react-radio">
                {template(item, <em className="react-radio-icon"/>)}
              </ReactSelectedItem>
            );
          })
        }
      </ReactSelectedItems>
    );
  }
}

