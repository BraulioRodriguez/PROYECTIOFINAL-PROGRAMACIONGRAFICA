import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Badge, Text } from 'react-native';

import Contexto from './src/contexto/Contexto';

const Icono = (props) => {
  const { cartItems } = useContext(Contexto);
  return (
    <>
      {cartItems.length ? (
        <Badge style={styles.badge}>
          <Text style={styles.text}>{cartItems.length}</Text>
        </Badge>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
const styles = StyleSheet.create({
  badge: {
    width: 25,
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: -4,
    right: -15,
  },
  text: {
    fontSize: 12,
    width: 100,
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps)(Icono);