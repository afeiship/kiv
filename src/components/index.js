import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-radio-group';
const DEFAULT_TEMPLATE = ({ item, index }, cb) => {
  const { value, label } = item;
  return (
    <label key={value} className={`${CLASS_NAME}__item`}>
      {cb()}
      <span className="is-label">{label}</span>
    </label>
  );
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: noop,
    template: DEFAULT_TEMPLATE
  };

  onChange = (inEvent) => {
    const { value } = inEvent.target.dataset;
    const { onChange } = this.props;
    onChange({
      target: { value }
    });
  };

  render() {
    const {
      className,
      defaultValue,
      items,
      template,
      name,
      onChange,
      ...props
    } = this.props;

    return (
      <section
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {items.map((item, index) => {
          const { value, label, ...itemProps } = item;
          const cb = () => {
            return (
              <input
                onChange={this.onChange}
                type="radio"
                name={name}
                data-value={value}
                defaultChecked={defaultValue === value}
                className={'is-field'}
                {...itemProps}
              />
            );
          };
          return template({ item, index }, cb);
        })}
      </section>
    );
  }
}
