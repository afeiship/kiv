# react-radio-group
> Abstract radio component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-radio-group
```

## properties
| Name         | Type   | Required | Default | Description                           |
| ------------ | ------ | -------- | ------- | ------------------------------------- |
| className    | string | false    | -       | The extended className for component. |
| disabled     | bool   | false    | -       | The input is disabled.                |
| readOnly     | bool   | false    | -       | The input is readOnly.                |
| name         | string | true     | -       | The input name.                       |
| defaultValue | string | false    | -       | Default value.                        |
| value        | string | false    | -       | Runtime chnaged value.                |
| items        | array  | false    | []      | The radio group options.              |
| template     | func   | false    | -       | The radio option template.            |
| onChange     | func   | false    | noop    | The handler when value changed.       |


## usage
1. import css
  ```scss
  @import "~@jswork/react-radio-group/dist/style.css";

  // or use sass
  @import "~@jswork/react-radio-group/dist/style.scss";

  // customize your styles:
  $react-radio-group-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactRadioGroup from '@jswork/react-radio-group';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      items: [
        {
          label: 'optino1',
          value: 'v1'
        },
        {
          label: 'optino2',
          value: 'v2'
        },
        {
          label: 'optino3',
          value: 'v3'
        }
      ]
    };

    render() {
      const { items } = this.state;
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-radio-group">
          <h3>normal</h3>
          <ReactRadioGroup
            name="abc"
            items={items}
            onChange={(e) => {
              console.log('events:', e.target.value);
            }}
          />

          <hr />
          <h3>disabled</h3>

          <ReactRadioGroup
            name="abcd"
            disabled
            items={items}
            onChange={(e) => {
              console.log('events:', e.target.value);
            }}
          />
          <hr />
          <h3>readonly</h3>

          <ReactRadioGroup
            name="abcde"
            readOnly
            value={'v1'}
            items={items}
            onChange={(e) => {
              console.log('events:', e.target.value);
            }}
          />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-radio-group/


## license
Code released under [the MIT license](https://github.com/afeiship/react-radio-group/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-radio-group
[version-url]: https://npmjs.org/package/@jswork/react-radio-group

[license-image]: https://img.shields.io/npm/l/@jswork/react-radio-group
[license-url]: https://github.com/afeiship/react-radio-group/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-radio-group
[size-url]: https://github.com/afeiship/react-radio-group/blob/master/dist/react-radio-group.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-radio-group
[download-url]: https://www.npmjs.com/package/@jswork/react-radio-group
