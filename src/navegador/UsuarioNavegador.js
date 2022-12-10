import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Registrar from '../pantallas/usuario/Registrar';
import Contexto from '../contexto/Contexto';
import Perfil from '../pantallas/usuario/Perfil';
import Login from '../pantallas/usuario/Login';

const Stack = createStackNavigator();

const UsuarioNavegador = () => {
  const { isOnline } = useContext(Contexto);
  return (
    <Stack.Navigator
      initialRouteName={isOnline ? 'Perfil de Usuario' : 'Login'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Perfil de Usuario' component={Perfil} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Registrar' component={Registrar} />
    </Stack.Navigator>
  );
};

export default UsuarioNavegador;