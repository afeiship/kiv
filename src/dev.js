import './dev.scss';
import ReactRadioGroup from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-radio-group">
        <ReactRadioGroup />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
