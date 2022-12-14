<<<<<<< HEAD
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import EasyButton from '../../componentes/EasyButton';
import Error from '../../componentes/Error';
import StoreContext from '../../contexto/Contexto';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { userLogin, isOnline } = useContext(StoreContext);

  useEffect(() => {
    if (isOnline) {
      navigation.navigate('User Profile');
    }
  }, [isOnline]);

  const handleSubmit = () => {
    if (email === '' || password === '') {
      setError('Por favor ingrese sus datos');
    } else {
      userLogin(email, password);
      Toast.show({
        topOffset: 60,
        type: 'success',
        text1: 'Login exitoso',
        text2: `Bienvenido`,
      });
    }
  };

  return (
    <FormContainer title='Login'>
      <h2>PROGRAMACION GRAFICA - PROYECTO FINAL</h2>
      <Input
        placeholder={'Ingrese su correo'}
        name={'email'}
        id={'email'}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={'Ingrese password'}
        name={'password'}
        id={'password'}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        {error ? <Error message={error} /> : null}
        <EasyButton medium primary onPress={() => handleSubmit()}>
          <Text style={{ color: 'white' }}>Iniciar Sesion</Text>
        </EasyButton>
        <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
          <Text style={styles.middleText}>No tiene cuenta?</Text>
          <EasyButton
            medium
            primary
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ color: 'white' }}>Registrarse</Text>
          </EasyButton>
        </View>
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: '80%',
    alignItems: 'center',
  },
  middleText: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});
=======
import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import EasyButton from '../../componentes/EasyButton';
import Error from '../../componentes/Error';
import StoreContext from '../../contexto/Contexto';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { userLogin, isOnline } = useContext(StoreContext);

  useEffect(() => {
    if (isOnline) {
      navigation.navigate('User Profile');
    }
  }, [isOnline]);

  const handleSubmit = () => {
    if (email === '' || password === '') {
      setError('Por favor ingrese sus datos');
    } else {
      userLogin(email, password);
      Toast.show({
        topOffset: 60,
        type: 'success',
        text1: 'Login exitoso',
        text2: `Bienvenido`,
      });
    }
  };

  return (
    <FormContainer title='Login'>
      <h2>PROGRAMACION GRAFICA - PROYECTO FINAL</h2>
      <Input
        placeholder={'Ingrese su correo'}
        name={'email'}
        id={'email'}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        placeholder={'Ingrese password'}
        name={'password'}
        id={'password'}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        {error ? <Error message={error} /> : null}
        <EasyButton medium primary onPress={() => handleSubmit()}>
          <Text style={{ color: 'white' }}>Sign In</Text>
        </EasyButton>
        <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
          <Text style={styles.middleText}>Don't have an account yet?</Text>
          <EasyButton
            medium
            primary
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </EasyButton>
        </View>
      </View>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: '80%',
    alignItems: 'center',
  },
  middleText: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});
>>>>>>> 670e804b86eda7bca71e134a7269c7960d3fa09f
export default Login;