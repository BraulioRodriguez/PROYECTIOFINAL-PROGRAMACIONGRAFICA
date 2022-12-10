import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckoutNavegador from './CheckoutNavegador';
import Carrito from '../pantallas/carrito/Carrito';

const Stack = createStackNavigator();

const CarritoNavegacion = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Carrito' component={Carrito} />
      <Stack.Screen
        name='Checkout'
        component={CheckoutNavegador}
        options={{
          title: 'Checkout',
        }}
      />
    </Stack.Navigator>
  );
};

export default CarritoNavegacion;