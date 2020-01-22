# react-radio-group
> Abstract radio component for react.

## installation
```shell
npm install -S @feizheng/react-radio-group
```

## update
```shell
npm update @feizheng/react-radio-group
```

## properties
| property  | type   | default | description |
| --------- | ------ | ------- | ----------- |
| className | String | -       | -           |
| value     | -      | -       | -           |
| onChange  | -      | -       | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-radio-group/dist/style.scss";

  // customize your styles:
  $react-radio-group-options: ()
  ```
2. import js
  ```js
  import ReactRadioGroup from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
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
        <div className="app-container">
          <ReactRadioGroup
            name="abc"
            items={items}
            onChange={(e) => {
              console.log('events:', e.target.value);
            }}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-radio-group/
