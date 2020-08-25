import React from 'react';
import ReactDOM from 'react-dom';
import ReactRadioGroup from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: [
      'https://dth-beta.alo7.com/assets/testimg/01.png',
      'https://dth-beta.alo7.com/assets/testimg/02.png',
      'https://dth-beta.alo7.com/assets/testimg/03.png',
      'https://dth-beta.alo7.com/assets/testimg/04.png',
      'https://dth-beta.alo7.com/assets/testimg/05.png',
      'https://dth-beta.alo7.com/assets/testimg/06.png',
      'https://dth-beta.alo7.com/assets/testimg/07.png',
      'https://dth-beta.alo7.com/assets/testimg/08.png',
      'https://dth-beta.alo7.com/assets/testimg/09.png',
      'https://dth-beta.alo7.com/assets/testimg/10.png',
      'https://dth-beta.alo7.com/assets/testimg/11.png',
      'https://dth-beta.alo7.com/assets/testimg/12.png',
      'https://dth-beta.alo7.com/assets/testimg/13.png',
      'https://dth-beta.alo7.com/assets/testimg/14.png',
      'https://dth-beta.alo7.com/assets/testimg/15.png',
      'https://dth-beta.alo7.com/assets/testimg/16.png',
      'https://dth-beta.alo7.com/assets/testimg/17.png',
      'https://dth-beta.alo7.com/assets/testimg/18.png',
      'https://dth-beta.alo7.com/assets/testimg/19.png'
    ]
  };

  template = ({ item }, cb) => {
    return (
      <label key={item} className={`is__item`}>
        {cb()}
        <figure className="is-figure">
          <img src={item} alt="" />
        </figure>
      </label>
    );
  };

  render() {
    const { items } = this.state;
    return (
      <div className="app-container">
        <ReactRadioGroup
          name="abc"
          items={items}
          template={this.template}
          onChange={(e) => {
            console.log('events:', e.target.value);
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
