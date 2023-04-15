import { StyleSheet, View } from 'react-native';
import LoginScreen from './Screens/Auth/LoginScreen';
import RegistrationScreen from './Screens/Auth/RegistrationScreen';
import { PostsScreen } from './Screens/Main/PostsScreen';
import { CreatePostsScreen } from './Screens/Main/CreatePostsScreen';
import { ProfileScreen } from './Screens/Main/ProfileScreen';
import { CommentsScreen } from './Screens/CommentsScreen';
import { MapScreen } from './Screens/MapScreen';
import { Home } from './Screens/Home';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
  const MainTab = createBottomTabNavigator();

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {/* <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <AuthStack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </AuthStack.Navigator> */}
        <MainTab.Navigator>
          <MainTab.Screen name="Posts" component={PostsScreen} />
          <MainTab.Screen name="CreatePosts" component={CreatePostsScreen} />
          <MainTab.Screen name="Profile" component={ProfileScreen} />
        </MainTab.Navigator>
      </NavigationContainer>
    </View>
  );
}
{
  /* <PostsScreen /> */
}
{
  /* <CreatePostsScreen /> */
}
{
  /* <CommentsScreen /> */
}
{
  /* <ProfileScreen /> */
}
{
  /* <MapScreen /> */
}
{
  /* <Home /> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
