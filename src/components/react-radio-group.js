import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    defaultValue:React.PropTypes.array,
    value:React.PropTypes.array,
  };

  static defaultProps = {
    defaultValue:[],
    value:[],
    onChange:null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={classNames('react-radio-group',this.props.cssClass)}>
        Hello React!
      </div>
    );
  }
}
