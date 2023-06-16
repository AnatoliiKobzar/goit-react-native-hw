import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './Screens/Auth/LoginScreen';
import RegistrationScreen from './Screens/Auth/RegistrationScreen';
import { CreatePostsScreen } from './Screens/Main/CreatePostsScreen';
import { ProfileScreen } from './Screens/Main/ProfileScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { Home } from './Screens/Main/Home';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (isAuth) {
    return (
      <MainTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffffff',
          tabBarActiveBackgroundColor: '#FF6C00',
          tabBarStyle: { borderRadius: 4 },
          tabBarItemStyle: {
            margin: 4,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 20,
          },
        }}
      >
        <MainTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="appstore-o" size={size} color={color} />
            ),
            title: 'Публикации',
            headerTitleAlign: 'center',
            headerShown: false,
          }}
        />
        <MainTab.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <AntDesign name="plus" size={size} color={color} />,
            title: 'Создать публикацию',
            headerTitleAlign: 'center',
          }}
        />
        <MainTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />,
            title: 'Профиль',
            headerTitleAlign: 'center',
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
