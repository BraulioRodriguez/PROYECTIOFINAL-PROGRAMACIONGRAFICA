import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={{
          uri: item.item?.image
            ? item.item?.image
            : 'https://i.pinimg.com/originals/b3/f1/da/b3f1da70927cc796e51f5a9066dde860.png',
        }}
        resizeMode='contain'
        style={{ height: 50 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
export default Header;