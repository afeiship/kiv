import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactAntSelect from '@jswork/react-ant-select';
import { Input } from 'antd';

const CLASS_NAME = 'react-ant-pre-select';

export type ReactAntPreSelectProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Default value.
   */
  value?: object;
  /**
   * The change handler.
   */
  onChange?: Function;
};

export default class ReactAntPreSelect extends Component<ReactAntPreSelectProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: null,
    onChange: noop
  };

  handleClick = () => {
    console.log('click me!');
  };

  render() {
    const { className, value, onChange, ...props } = this.props;

    return (
      <Input
        disabled
        value="OrderBy"
        style={{ width: 180 }}
        addonAfter={
          <ReactAntSelect
            data-component={CLASS_NAME}
            className={classNames(CLASS_NAME, className)}
            {...props}
          />
        }
      />
    );
  }
}
