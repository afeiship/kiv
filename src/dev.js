import './dev.scss';
import ReactRadioGroup from './main';


class App extends React.Component {
  state = {
    items: [
      {
        value: 1,
        text: '选项1'
      }, {
        value: 2,
        text: '选项2'
      }, {
        value: 3,
        text: '选项3'
      }, {
        value: 4,
        text: '选项4'
      }, {
        value: 5,
        text: '选项5'
      }
    ]
  };

  _change(inEvent){
    console.log(inEvent.target.value);
  }

  render() {
    return (
      <div className="hello-react-radio-group">
        <ReactRadioGroup items={this.state.items} onChange={this._change.bind(this)} value={[1]}/>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
