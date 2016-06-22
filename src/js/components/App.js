import React from 'react';
import DevTools from './DevTools';
import '../../sass/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.header
    }
  }

  render() {
    const {header, text, items} = this.props;
    return (
      <div>
        <h1 onClick={() => this.handleClick()}>{this.state.title}</h1>
        <input id="inp" type="text" onChange={(event) => this.handleClick(event)}/>
        <Texts items={items}/>
        {console.log(this.props)}
        <Example />
      </div>
    )
  }

  handleClick(e) {

    this.setState({
      title: e.target.value
    });
  }
}

export default App;

const Texts = ({items}) => (
  <div>
    {
      items.map((item, i) => (
        <div key={i}>{item.text}</div>
      ))
    }
  </div>
);

const Example = () => {
  return (
    <div onClick={() => doSomething()}>click me</div>
  );

  function doSomething() {
    console.log('do something');
  }
};