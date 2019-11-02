# react-radio-group
> RadioGroup component for react.

## install
```shell
npm install -S afeiship/react-radio-group
```

## usage
1. import css
  ```scss
  @import "~react-radio-group/style.scss";

  // customize your styles:
  $react-radio-group-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactRadioGroup from 'react-radio-group';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactRadioGroup />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-radio-group/
