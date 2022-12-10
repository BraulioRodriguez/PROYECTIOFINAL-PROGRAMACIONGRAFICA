import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    Button,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import StoreContext from '../../contexto/Contexto';
import EasyButton from '../../componentes/EasyButton';

let { height, width } = Dimensions.get('window');

const Carrito = (props) => {
    const { ItemsCarrito, quitarCarrito, eliminarCarrito } = useContext(StoreContext);
    const total = ItemsCarrito.reduce((acc, p) => acc + p.precio * p.qty, 0)

    return (
        <>
        {ItemsCarrito.length ? (
        <Container>
          <H1 style={{ alignSelf: 'center' }}>Carrito</H1>

          <SwipeListView
            data={ItemsCarrito}
            renderItem={(data) => <ItemsCarrito item={data} />}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  onPress={() => quitarCarrito(data.item)}
                  style={styles.hiddenButton}
                >
                  <Icon name='trash' color={'white'} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
            <View style={styles.bottomContainer}>
                <Left>
                    <Text style={styles.precio}>$ {total}</Text>
                </Left>
                <Right>
                    <EasyButton danger medium onPress={() => eliminarCarrito()}>
                    <Text style={{ color: 'white' }}>Eliminar</Text>
                    </EasyButton>
                </Right>
                <Right>
                    <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate('Checkout')}
                >
                <Text style={{ color: 'white' }}>checkout</Text>
              </EasyButton>
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <Text>Su carrito aun esta vacio</Text>
          <Text>Agregue productos a su carrito para empezar</Text>
        </Container>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    elevation: 20,
  },
  precio: {
    fontSize: 18,
    margin: 20,
    color: 'red',
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  hiddenButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
  },
});
export default Carrito;