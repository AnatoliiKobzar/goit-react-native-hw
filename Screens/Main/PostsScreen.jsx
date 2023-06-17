import { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import { nanoid } from 'nanoid';

export const PostsScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        key={nanoid()}
        data={posts}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  postContainer: {
    marginHorizontal: 16,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 240,
    width: '100%',
  },
});
