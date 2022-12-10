import React, { useState, useCallback, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Button,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import StoreContext from '../../contexto/Contexto';
import Lista from './Lista';
import EasyButton from '../../componentes/EasyButton';

let { width, height } = Dimensions.get('window');

const Productos = (props) => {
  const [productList, setstate] = useState();
  const [productFilter, setProductFilter] = useState();

  const {
    products,
    productsFiltred,
    setProducts,
    setProductsFiltred,
    loading,
    getProducts,
  } = useContext(StoreContext);

  useFocusEffect(
    useCallback(() => {
      getProducts();
    }, [])
  );

  const searchProduct = (text) => {
    if (text == '') {
      setProductsFiltred(products);
    }
    setProductsFiltred(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
  return (
    <View>
      <View style={styles.buttonContainer}>
        <EasyButton
          secondary
          medium
          onPress={() => props.navigation.navigate('Orders')}
        >
          <Text style={styles.buttonText}>
            <Icon name='shopping-bag' size={18} color='white' /> Orders
          </Text>
        </EasyButton>
        <EasyButton
          secondary
          medium
          onPress={() =>
            props.navigation.navigate('ProductForm', { item: props })
          }
        >
          <Icon name='plus' size={18} color='white' />
          <Text style={styles.buttonText}>Products</Text>
        </EasyButton>
        <EasyButton
          secondary
          medium
          onPress={() => props.navigation.navigate('Categories')}
        >
          <Icon name='plus' size={18} color='white' />
          <Text style={styles.buttonText}>Categories</Text>
        </EasyButton>
      </View>
      <View>
        <Header searchBar rounded />
        <Item style={{ padding: 5 }}>
          <Icon name='buscar' />
          <Input
            placeholder='Buscar'
            onChangeText={(text) => searchProduct(text)}
          />
        </Item>
      </View>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size='large' color='red' />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item) => item.id}
          data={productsFiltred}
          renderItem={({ item, index }) => (
            <Lista item={item} navigation={props.navigation} index={index} />
          )}
        />
      )}
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
  spinner: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginBottom: 160,
    backgroundColor: 'white',
  },
  buttonContainer: {
    margin: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    marginLeft: 4,
    color: 'white',
  },
});

export default Productos;