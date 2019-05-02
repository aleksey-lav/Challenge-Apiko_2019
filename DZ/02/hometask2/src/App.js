import React, {Component} from 'react';
import './App.css';
import PostList from './components/PostList/PostList';
import MoreButton from './components/MoreButton/MoreButton';

const API = 'https://jsonplaceholder.typicode.com/posts';
const fetchData = () =>
  fetch(API).then(
    response => response.json()
  );
class App extends Component {
  state = {
    isLoading: true,
    data: [],
    error: null, 
    numberPosts: 10
  }
  moreAdded = (event) => {
    event.preventDefault();
    this.setState({
      numberPosts : this.state.numberPosts + 10
    })
  }
  componentDidMount() {
    setTimeout(()=>{
      fetchData()
      .then(data => {
        this.setState({data, isLoading: false });
      })
      .catch(error => console.log(`This is the error: ${error}`));
    }, 1000)  
   }
  render() {
    console.log('render');
    const { data, isLoading, numberPosts } = this.state;
    return( 
      <>
      {!isLoading ? <PostList data={data.slice(0,numberPosts)} {...this.props}/> 
      : <h3>Loading...</h3>}
      <MoreButton onClick={this.moreAdded}/>
      </>
    );
  }
}
  export default App
