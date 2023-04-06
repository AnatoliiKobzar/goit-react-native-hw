import { useState, useEffect, useCallback } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [passwordHide, setPasswordHide] = useState(true);
  const [userData, setUserData] = useState(initialState);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const keyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Image
          style={styles.background}
          resizeMode={'cover'}
          source={require('../assets/Images/PhotoBG.jpg')}
        />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <View style={{ ...styles.form, paddingBottom: keyboardStatus ? 32 : 144 }}>
            <View style={styles.formWrap}>
              <Text style={styles.formTitle}>Войти</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: emailFocus ? '#FF6C00' : '#E8E8E8',
                  backgroundColor: emailFocus ? '#FFFFFF' : '#F6F6F6',
                }}
                value={userData.email}
                placeholder={'Адрес электронной почты'}
                cursorColor={'#FF6C00'}
                onFocus={() => {
                  setKeyboardStatus(true);
                  setEmailFocus(true);
                }}
                onBlur={() => setEmailFocus(false)}
                onChangeText={value => setUserData(prevState => ({ ...prevState, email: value }))}
              />
              <View style={{ position: 'relative' }}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: passwordFocus ? '#FF6C00' : '#E8E8E8',
                    backgroundColor: passwordFocus ? '#FFFFFF' : '#F6F6F6',
                    marginBottom: 0,
                  }}
                  value={userData.password}
                  placeholder={'Пароль'}
                  cursorColor={'#FF6C00'}
                  secureTextEntry={passwordHide}
                  onFocus={() => {
                    setKeyboardStatus(true);
                    setPasswordFocus(true);
                  }}
                  onBlur={() => setPasswordFocus(false)}
                  onChangeText={value =>
                    setUserData(prevState => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity style={styles.btnShowPassword}>
                  {passwordHide ? (
                    <Text
                      style={styles.btnLoginText}
                      onPress={() => {
                        setPasswordHide(false);
                      }}
                    >
                      Показать
                    </Text>
                  ) : (
                    <Text
                      style={styles.btnLoginText}
                      onPress={() => {
                        setPasswordHide(true);
                      }}
                    >
                      Скрыть
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
              {!keyboardStatus && (
                <View>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText} onPress={() => setUserData(initialState)}>
                      Войти
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnLoginText}>Нет аккаунта? Зарегистрироваться</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  form: {
    position: 'relative',
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  formWrap: {
    marginHorizontal: 16,
  },
  formImg: {
    position: 'absolute',
    top: -60,
    left: 128,
    width: 132,
    height: 120,
  },
  formTitle: {
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#F6F6F6',
  },
  btn: {
    backgroundColor: '#FF6C00',
    height: 50,
    marginTop: 43,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  btnText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  btnShowPassword: {
    position: 'absolute',
    right: 16,
    top: 14,
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLoginText: {
    fontSize: 16,
    color: '#1B4371',
  },
});
