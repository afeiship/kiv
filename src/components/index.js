import noop from '@feizheng/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

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

export default class ReactRadioGroup extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The input name.
     */
    name: PropTypes.string.isRequired,
    /**
     * Default value.
     */
    value: PropTypes.string,
    /**
     * The radio group options.
     */
    items: PropTypes.array,
    /**
     * The radio option template.
     */
    template: PropTypes.func,
    /**
     * The handler when value changed.
     */
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
