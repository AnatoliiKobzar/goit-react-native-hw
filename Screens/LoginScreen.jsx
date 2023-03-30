import { ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native';

const image = { uri: '.' };

export default function LoginScreen() {
  return (
    <ImageBackground style={styles.image} source={require('../assets/Images/PhotoBG.jpg')}>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Регистрация</Text>
        <TextInput style={styles.input} placeholder={'Логин'} cursorColor={'#FF6C00'} />
        <TextInput
          style={styles.input}
          placeholder={'Адрес электронной почты'}
          cursorColor={'#FF6C00'}
        />
        <TextInput
          style={{ ...styles.input, marginBottom: 0 }}
          placeholder={'Пароль'}
          cursorColor={'#FF6C00'}
          secureTextEntry={true}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  form: {
    height: 549,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  formTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    height: 50,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
});
