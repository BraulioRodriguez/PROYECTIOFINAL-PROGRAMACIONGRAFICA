import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavegador from './HomeNavegador';
import { View } from 'react-native';
import CarritoNavegacion from './CarritoNavegacion';
import UsuarioNavegador from './UsuarioNavegador';
import AdminNavegador from './AdminNavegador';

const Tab = createBottomTabNavigator();
const Principal = () => {
  const { userInfo } = useContext(Contexto);
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63',
      }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name='Home'
        component={HomeNavegador}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='home' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name='carrito-de-compra' color={color} size={30} />
              <CartIcon />
            </View>
          ),
        }}
        name='Tarjeta'
        component={CarritoNavegacion}
      />
      {userInfo?.isAdmin ? (
        <Tab.Screen
          name='Admin'
          component={AdminNavegador}
          options={{
            tabBarIcon: ({ color }) => (
              <Icono name='cog' color={color} size={30} />
            ),
          }}
        />
      ) : null}
      <Tab.Screen
        name='User'
        component={UsuarioNavegador}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name='user' color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Principal;
