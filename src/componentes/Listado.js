import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

let { width } = Dimensions.get('window');

const Listado = () => {
  return (
    <View elevation={1} style={styles.listHeader}>
      <View style={styles.headerItem}></View>
      <View style={styles.headerItem}>
        <Text style={{ fontWeight: '600' }}>Marca</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={{ fontWeight: '600' }}>Nombre</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={{ fontWeight: '600' }}>Categoria</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={{ fontWeight: '600' }}>Precio</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'gainsboro',
  },
  headerItem: {
    margin: 3,
    width: width / 6,
  },
});
export default Listado;
