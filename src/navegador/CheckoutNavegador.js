import React from 'react';

const Tab = createMaterialTopTabNavigator();

const CheckoutNavegador = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Envio' component={Checkout} />
      <Tab.Screen name='Pago' component={Pago} />
      <Tab.Screen name='Confirmar' component={Confirmacion} />
    </Tab.Navigator>
  );
};

export default CheckoutNavegador;