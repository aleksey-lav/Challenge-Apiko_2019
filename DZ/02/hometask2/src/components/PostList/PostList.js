import React from 'react';
import PostListItem from '../PostListItem/PostListItem'


function PostList (props) {
    console.log(props)
      return (
        <div>
          <h3 style={{fontSize: '26px', color: 'tomato'}}>Posts API :</h3>
          <hr />
          <div>
            {props.data.map(post => (
              <PostListItem key={post.id} id={post.id} title={post.title} text={post.body}/>
            ))}
          </div>
        </div>
      );
    }
  export default PostList;