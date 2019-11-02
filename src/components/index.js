import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-radio-group';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: noop
  };
  /*===properties end===*/

  render() {
    const { className, items, ...props } = this.props;
    return (
      <section
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {items.map((item) => {
          const { value, label, ...itemProps } = item;
          return (
            <label key={value} className={`${CLASS_NAME}__item`}>
              <input type="radio" {...itemProps} className={'is-field'} />
              <span className="is-label">{label}</span>
            </label>
          );
        })}
      </section>
    );
  }
}
