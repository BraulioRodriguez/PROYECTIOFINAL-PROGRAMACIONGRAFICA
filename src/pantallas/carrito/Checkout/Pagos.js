import React, { useState } from 'react';
import { View, Button } from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Radio,
  Right,
  Left,
  Picker,
  Icon,
  Body,
  Title,
} from 'native-base';

const methods = [
    { name: 'Efectivo', value: 1 },
    { name: 'Transferencia Bancaria', value: 2 },
    { name: 'Pago por Tarjeta', value: 3 },
];

const pagosTarjeta = [
    { name: 'Wallet', value: 1 },
    { name: 'Visa', value: 2 },
    { name: 'MasterCard', value: 3 },
    { name: 'Otro', value: 4 },
];

const Pago = (props) => {
    const order = props.route.params;

    const [select, setSelect] = useState();
    const [card, setCard] = useState();
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Elija su metodo de pago</Title>
                    </Body>
                </Header>
            <Content>
        {methods.map((item) => (
          <ListItem key={item.name} onPress={() => setSelect(item.value)}>
            <Left>
              <Text>{item.name}</Text>
            </Left>
            <Right>
              <Radio selected={select === item.value} />
            </Right>
          </ListItem>
        ))}
        {select === 3 ? (
            <Picker
                mode='dropdown'
                iosIcon={<Icon name={'arrow-down'} />}
                headerStyle={{ backgroundColor: 'orange' }}
                headerBackButtonTextStyle={{ color: '#fff' }}
                headerTitleStyle={{ color: '#fff' }}
                selectedValue={card}
                onValueChange={(x) => setCard(x)}
            >
            {pagosTarjeta.map((c) => (
              <Picker.Item label={c.name} value={c.name} />
            ))}
          </Picker>
        ) : null}
            <View style={{ marginTop: 60, alignSelf: 'center' }}>
                <Button
                title={'Confirmar'}
                onPress={() => props.navigation.navigate('Confirmar', { order })}
                />
            </View>
        </Content>
    </Container>
  );
};

export default Pago;