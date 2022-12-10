import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

let { width } = Dimensions.get('window');

const searchProduct = (props) => {
  const { productsFiltred } = props;
  return (
    <Content style={{ width: width }}>
      {productsFiltred.length > 0 ? (
        productsFiltred.map((item) => (
          <ListItem
            onPress={() => {
              props.navigation.navigate('ProductDetail', { item });
            }}
            key={item._id}
            avatar
          >
            <Left>
              <Thumbnail
                source={{
                  uri: item.image
                    ? item.image
                    : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                }}
              />
            </Left>
            <Body>
              <Text>{item.name}</Text>
              <Text note>{item.description}</Text>
            </Body>
          </ListItem>
        ))
      ) : (
        <View style={styles.center}>
          <Text style={{ alignSelf: 'center' }}>
            Ningun producto encontrado
          </Text>
        </View>
      )}
    </Content>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default searchProduct;