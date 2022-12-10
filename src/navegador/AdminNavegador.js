import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categorias from '../pantallas/admin/Categorias';
import Ordenes from '../pantallas/admin/Ordenes';
import Productos from '../pantallas/admin/Productos';

const Stack = createStackNavigator();

const AdminNavegador = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        options={{ title: 'Productos' }}
        name='Productos'
        component={Productos}
      />
      <Stack.Screen name='Categorias' component={Categorias} />
      <Stack.Screen name='Ordenes' component={Ordenes} />
    </Stack.Navigator>
  );
};

export default AdminNavegador;