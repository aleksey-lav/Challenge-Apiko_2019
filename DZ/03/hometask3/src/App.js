import React, {Component} from 'react';
import './App.css';
import PreloadHOC from './hoc/PreloadHOC'

class AppComponentUI extends Component {
  render() {
    return (
      <div className="box-center">
      <h2 style={{textAlign: 'center'}}>CLICK THIS LINK</h2>
      <a href={this.props.data.url}>{this.props.data.url}</a>
      </div>
      
    );
  }
}

const AppComponent = PreloadHOC('data')(AppComponentUI);

class App extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then(response => response.json())
      .then(data => this.updateState(data))
  }

  updateState = (data) => {
    window.setTimeout(() => {
      this.setState({ data })
    }, 3000);
  }

  render() {
    return (
      <AppComponent data={this.state.data} />
    );
  }
}

export default App;
