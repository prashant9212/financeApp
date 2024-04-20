import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';
import ViewSlider from 'react-native-view-slider'

const { width, height } = Dimensions.get('window');

function SliderMain1() {
  return (
    <>
      <ViewSlider 
        renderSlides={
          <>
            <View style={styles.viewBox}>
              <Image source={require("../assets/banner1.jpg")} style={styles.BannerImg} />
            </View>
            <View style={styles.viewBox}>
              <Image source={require("../assets/banner2.jpg")} style={styles.BannerImg} />
            </View>
          </>
        }
        style={styles.slider}
        //height = {200}
        slideCount={2}
        dots={false}
        dotActiveColor='red'
        dotInactiveColor='gray'
        dotsContainerStyle={styles.dotContainer}
        autoSlide={true}
        slideInterval={5000}
      />
    </>
  );
};

const styles = StyleSheet.create({
  BannerImg:{
    height: 80, 
    width :width,
    borderRadius:0,
  },
  viewBox: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    width: width,
    alignItems: 'center',
    height: 80,
  },
  slider: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -15
  }
});

export default SliderMain1;