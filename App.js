import { StyleSheet, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import { PostsScreen } from './Screens/PostsScreen';
import { CreatePostsScreen } from './Screens/CreatePostsScreen';
import { CommentsScreen } from './Screens/CommentsScreen';
import { ProfileScreen } from './Screens/ProfileScreen';
import { MapScreen } from './Screens/MapScreen';
import { Home } from './Screens/Home';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const AuthStack = createStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Register" component={RegistrationScreen} />
          {/* <PostsScreen /> */}
          {/* <CreatePostsScreen /> */}
          {/* <CommentsScreen /> */}
          {/* <ProfileScreen /> */}
          {/* <MapScreen /> */}
          {/* <Home /> */}
        </AuthStack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
