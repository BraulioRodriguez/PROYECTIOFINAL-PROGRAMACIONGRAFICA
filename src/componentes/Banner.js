import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src';

let { width } = Dimensions.get('window');

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    setBannerData([
      'https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-9.jpg',
      'https://images.macrumors.com/article-new/2020/10/iphone-13-color-lineup.jpg',
      'https://i0.wp.com/thenerdsofcolor.org/wp-content/uploads/2021/10/bcB3Kdypuv8MAA5GZZM3b.png',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper
          style={{ height: width / 2 }}
          showButtons={false}
          autoplay={true}
          autoplayTimeout={5}
        >
          {bannerData.map((item) => (
            <Image
              style={styles.imageBanner}
              key={item}
              source={{ uri: item }}
              resizeMode='contain'
            />
          ))}
        </Swiper>
        <View style={{ height: 20 }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
export default Banner;