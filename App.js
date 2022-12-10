import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import ShopContextProvider from './src/contexto/Tienda';
import Header from './src/componentes/Encabezado';
import Navigation from './src/navegador/Navegador';

LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <ShopContextProvider>
      <Provider store={store}>
        <Header />
        <Navigation />
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <StatusBar style='auto' />
      </Provider>
    </ShopContextProvider>
  );
};

export default App;