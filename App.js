import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostList from './components/post_list';

export default class App extends React.Component {

  render() {
    const posts = [
      { id: '09384', description: 'Description 1', author:'Steve'},
      { id: '0339384', description: 'Description 2', author:'Frank'},
    ];
    return (
      <View style={styles.container}>
        <Text>Here we go!</Text>
        <PostList posts={posts} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
