import React, { useEffect, useState, useContext } from 'react';
import { View, Button } from 'react-native';
import { Item, Picker } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Contexto from './src/contexto/Contexto';

const Checkout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [user, setUser] = useState();
  const { ItemsCarrito } = useContext(Contexto);

  useEffect(() => {
    setOrderItems(ItemsCarrito);
  }, [ItemsCarrito]);

  const checkoutHandler = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      status: '3',
      user,
      zip,
    };
    props.navigation.navigate('Pago', { order: order });
  };
  return (
    <KeyboardAwareScrollView>
      <FormContainer title={'Direccion de Envio'}>
        <Input
          placeholder={'Numero'}
          name={'telefono'}
          value={phone}
          keyboardType={'numeric'}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={'Direccion 1'}
          name={'Direccion1'}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={'Direccion 2'}
          name={'Direccion2'}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={'Ciudad'}
          name={'ciudad'}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={'Codigo Zip'}
          name={'zip'}
          value={zip}
          keyboardType={'numeric'}
          onChangeText={(text) => setZip(text)}
        />
        <Item picker>
          <Picker
            note='dropdown'
            iosIcon={<Icon name='arrow-down' color='#007aff' />}
            style={{
              width: undefined,
            }}
            selectedValue={country}
            placeholder='Elija su pais'
            placeholderStyle={{ color: '#007aff' }}
            placeholderIconColor='#007aff'
            onValueChange={(e) => setCountry(e)}
          >
            {countries.map((c) => (
              <Picker.Item key={c.code} label={c.name} value={c.name} />
            ))}
          </Picker>
        </Item>
        <View style={{ width: '80%', alignItems: 'center' }}>
          <Button title='Confirmar' onPress={() => checkoutHandler()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  const { ItemsCarrito } = state;
  return {
    ItemsCarrito: ItemsCarrito,
  };
};

export default connect(mapStateToProps)(Checkout);