import React from 'react';
import { View, Text } from 'react-native';

class PostList extends React.Component {

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <Text key={post.id}>
          {post.author} says {post.description}
        </Text>
      );
    });
  }

  render() {
    return (
      <View>
        {this.renderPosts()}
      </View>
    );
  }

  // render() {
  //   posts = this.props.posts;
  //   return (
  //     <View>
  //       {posts.map(post => {
  //         <Text key={post.id}>
  //           {post.author} says {post.description}
  //         </Text>
  //       })}
  //     </View>
  //   )
  // }
};

export default PostList;
