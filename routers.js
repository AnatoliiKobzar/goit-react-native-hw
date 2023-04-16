import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './Screens/Auth/LoginScreen';
import RegistrationScreen from './Screens/Auth/RegistrationScreen';
import { PostsScreen } from './Screens/Main/PostsScreen';
import { CreatePostsScreen } from './Screens/Main/CreatePostsScreen';
import { ProfileScreen } from './Screens/Main/ProfileScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (isAuth) {
    return (
      <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
        <MainTab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="appstore-o" size={size} color={color} />
            ),
          }}
        />
        <MainTab.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <AntDesign name="plus" size={size} color={color} />,
          }}
        />
        <MainTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />,
          }}
        />
      </MainTab.Navigator>
    );
  }
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
