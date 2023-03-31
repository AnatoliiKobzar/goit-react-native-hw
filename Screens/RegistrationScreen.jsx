import { useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function RegistrationScreen() {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [passwordHide, setPasswordHide] = useState(true);
  const [userData, setUserData] = useState(initialState);
  const [loginFocus, setLoginFocus] = useState(false);
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

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Image
          style={styles.background}
          resizeMode={'cover'}
          source={require('../assets/Images/PhotoBG.jpg')}
        />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <View style={{ ...styles.form, paddingBottom: keyboardStatus ? 32 : 78 }}>
            <Image style={styles.formImg} source={require('../assets/Images/add_photo.png')} />
            <View style={styles.formWrap}>
              <Text style={styles.formTitle}>Регистрация</Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: loginFocus ? '#FF6C00' : '#E8E8E8',
                  backgroundColor: loginFocus ? '#FFFFFF' : '#F6F6F6',
                }}
                value={userData.login}
                placeholder={'Логин'}
                cursorColor={'#FF6C00'}
                onFocus={() => {
                  setKeyboardStatus(true);
                  setLoginFocus(true);
                }}
                onBlur={() => setLoginFocus(false)}
                onChangeText={value => setUserData(prevState => ({ ...prevState, login: value }))}
              />
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
                      Зарегистрироваться
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnLoginText}>Уже есть аккаунт? Войти</Text>
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
    paddingTop: 92,
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
    fontWeight: 500,
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
