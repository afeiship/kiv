import React from 'react';
import ReactDOM from 'react-dom';
import ReactRadioGroup from '../src/main';
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
