import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsContainer from '../pantallas/productos/Container';
import ProductoInd from '../pantallas/productos/ProductoInd';

const Stack = createStackNavigator();
const HomeNavegador = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={ProductsContainer} />
      <Stack.Screen name='ProductDetail' component={ProductoInd} />
    </Stack.Navigator>
  );
};

export default HomeNavegador;