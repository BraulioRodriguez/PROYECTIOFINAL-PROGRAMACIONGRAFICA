import React, { useCallback, useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Buscar from './Buscar';
import Filtros from './Filtros';
import { useFocusEffect } from '@react-navigation/native';
import Lista from '../admin/Lista';
import Banner from '../../componentes/Banner';
import ShopContextProvider from '../../contexto/Tienda';

let { height } = Dimensions.get('window');

const ProductsContainer = ({ navigation }) => {
  const {
    products,
    productsFiltred,
    productsCtg,
    loading,
    getProducts,
    setProductsFiltred,
    setProductsCtg,
    initialState,
  } = useContext(ShopContextProvider);
  const { categories } = useSelector((state) => state.getCategories);
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState();
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      setFocus(false);
      setActive(-1);
      getProducts();
      dispatch(getCategories());
      dispatch(getProducts());
    }, [])
  );

  const searchProduct = (text) => {
    setProductsFiltred(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const changeCtg = (ctg) => {
    {
      ctg == 'all'
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category._id === ctg),
              setActive(true)
            ),
          ];
    }
  };
  if (loading)
    return (
      <Container style={(styles.center, { backgroundColor: '#f2f2f2' })}>
        <ActivityIndicator size='large' color='blue' />
      </Container>
    );
  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name='ios-search' />
          <Input
            placeholder='Buscar'
            onFocus={openList}
            onChangeText={(text) => searchProduct(text)}
          />
          {focus && <Icon onPress={onBlur} name='ios-close' />}
        </Item>
      </Header>
      {focus ? (
        <Buscar
          navigation={navigation}
          productsFiltred={productsFiltred}
        />
      ) : (
        <ScrollView style={styles.container}>
          <View>
            <View>
              <Banner />
            </View>
            <View>
              <Filtros
                categories={categories}
                Filtros={changeCtg}
                productsCtg={productsCtg}
                active={active}
                setActive={setActive}
              />
            </View>
            {productsCtg.length > 0 ? (
              <View style={styles.listContainer}>
                {productsCtg.map((item) => (
                  <Lista
                    navigation={navigation}
                    key={item.name}
                    item={item}
                  />
                ))}
              </View>
            ) : (
              <View style={[styles.center, { height: height / 2 }]}>
                <Text>No se encontraron Productos</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsContainer;