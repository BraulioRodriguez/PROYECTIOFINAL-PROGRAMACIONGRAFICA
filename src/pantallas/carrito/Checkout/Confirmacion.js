import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Button } from 'react-native';
import { Text, Left, Right, ListItem, Thumbnail, Body } from 'native-base';
import Toast from 'react-native-toast-message';
import Contexto from './src/contexto/Contexto';

let { width, height } = Dimensions.get('window');

const Confirmacion = ({ route, navigation }) => {
  const { crearOrden, error, eliminarCarrito } = useContext(Contexto);
  const finalizarOrden = route.params;

  const confirmarOrden = () => {
    const order = finalizarOrden.order.order;
    crearOrden(order);
    if (!error) {
      Toast.show({
        topOffset: 60,
        type: 'exito',
        text1: 'Orden Completada',
        text2: '',
      });
      eliminarCarrito();
      navigation.navigate('Cart');
    } else {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Algo salio mal',
        text2: 'Porfavor intente de neuvo',
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Confirmar Orden</Text>
        {route.params ? (
          <View style={{ borderWidth: 1, borderColor: 'orange' }}>
            <Text style={styles.title}>Shipping to:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {finalizarOrden.order.order.shippingAddress1}</Text>
              <Text>Address2: {finalizarOrden.order.order.shippingAddress2}</Text>
              <Text>City: {finalizarOrden.order.order.city}</Text>
              <Text>Zip Code: {finalizarOrden.order.order.zip}</Text>
              <Text>Country: {finalizarOrden.order.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
            {finalizarOrden.order.order.orderItems.map((x) => (
              <ListItem style={styles.listItem} key={x.name} avatar>
                <Left>
                  <Thumbnail source={{ uri: x.image }} />
                </Left>
                <Body style={styles.body}>
                  <Left>
                    <Text>{x.name}</Text>
                  </Left>
                  <Right>
                    <Text>$ {x.price}</Text>
                  </Right>
                </Body>
              </ListItem>
            ))}
          </View>
        ) : null}
        <View style={{ alignItems: 'center', margin: 20 }}>
          <Button title={'Solicitar orden'} onPress={confirmarOrden} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  title: {
    alignSelf: 'center',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Confirmacion;