import React, { useContext, useState, useCallback, useEffect } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import EasyButton from '../../componentes/EasyButton';
import ShopContextProvider from '../../contexto/Tienda';

const Perfil = ({ navigation }) => {
  const { userInfo, isOnline, userLogout } = useContext(ShopContextProvider);

  useEffect(() => {
    if (!isOnline) {
      navigation.navigate('Login');
    }
  }, [isOnline]);

  const logoutHandler = () => {
    userLogout();
    navigation.navigate('Login');
  };
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <Text style={{ fontSize: 30 }}>{userInfo?.name}</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ margin: 10 }}>Correo: {userInfo?.email}</Text>
          <Text style={{ margin: 10 }}>Numero de Telefono: {userInfo?.phone}</Text>
          <Text style={{ margin: 10 }}>
            Admin: {userInfo.isAdmin ? 'Admin' : 'Not Admin'}
          </Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <EasyButton medium secondary onPress={logoutHandler}>
            <Text style={{ color: 'white' }}>Cerrar Sesion</Text>
          </EasyButton>
        </View>
        <View style={styles.order}>
          <Text style={{ fontSize: 20 }}>Mis Ordenes</Text>
          <View></View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  order: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 60,
  },
});

export default Perfil;