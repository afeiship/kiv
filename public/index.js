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
