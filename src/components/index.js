import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactList from '@jswork/react-list';

const CLASS_NAME = 'react-radio-group';
const DEFAULT_TEMPLATE = ({ item, current }, cb) => {
  const { value, label } = item;
  return (
    <label key={value} className="is-item" data-active={current === value}>
      {cb(value)}
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
     * The input is disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The input is readOnly.
     */
    readOnly: PropTypes.bool,
    /**
     * The input appearance.
     */
    appearance: PropTypes.bool,
    /**
     * The input name.
     */
    name: PropTypes.string.isRequired,
    /**
     * Default value.
     */
    defaultValue: PropTypes.string,
    /**
     * Runtime chnaged value.
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
    appearance: true,
    onChange: noop,
    template: DEFAULT_TEMPLATE
  };

  getInitialChecked(inValue) {
    const { value, defaultValue } = this.props;
    const val = (v) => {
      return typeof v !== 'undefined' ? v === inValue : undefined;
    };

    return {
      checked: val(value),
      defaultValue: val(defaultValue)
    };
  }

  onChange = (inEvent) => {
    const { value } = inEvent.target.dataset;
    const { onChange } = this.props;
    this.current = value;
    this.forceUpdate();
    onChange({ target: { value } });
  };

  itemTemplate = ({ item, index }) => {
    const { name, disabled, appearance, template, readOnly } = this.props;
    const cb = (inValue, inProps) => {
      return (
        <input
          onChange={this.onChange}
          type="radio"
          name={name}
          data-appearance={appearance}
          disabled={disabled}
          readOnly={readOnly}
          data-value={inValue}
          className="is-field"
          {...this.getInitialChecked(inValue)}
          {...inProps}
        />
      );
    };
    return template({ item, index, current: this.current }, cb);
  };

  render() {
    const {
      className,
      value,
      defaultValue,
      items,
      template,
      name,
      disabled,
      appearance,
      readOnly,
      onChange,
      ...props
    } = this.props;

    return (
      <ReactList
        items={items}
        template={this.itemTemplate}
        data-disabled={disabled}
        data-readonly={readOnly}
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
