  
import React, {Component} from 'react';


class PostListItem extends Component {

    shouldComponentUpdate(nextProps) {
        return (
          this.props.id !== nextProps.id ||
          this.props.title !== nextProps.title ||
          this.props.body !== nextProps.body
        );
      }
    render (){
        return (
      <>
        {this.props.id}
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
        <hr/>
      </>
    );
    }
    
    
}

export default PostListItem;