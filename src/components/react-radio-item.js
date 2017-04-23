export default class extends React.PureComponent {
  render() {
    const {text, selected,...props} = this.props;
    return (
      <a {...props} className="react-radio-item" data-selected={selected}>
        <em className="right" />
        <span className="left">{text}</span>
      </a>
    );
  }
}

