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
        renderSlides = {
          <>
            <View style={styles.viewBox}>
              <Image source={{uri: 'https://images.aapkabazar.co/slider/ChanaDalPre1.webp'}} style={{height: 200, width}}/>
            </View>
            <View style={styles.viewBox}>
              <Image source={{uri: 'https://images.aapkabazar.co/banners/top_banner/app/kismis.webp'}} style={{height: 200, width}}/>
            </View>
         </>
      }
      style={styles.slider}
      //height = {200}
      slideCount = {2}
      dots = {true} 
      dotActiveColor = 'red'
      dotInactiveColor = 'gray'
      dotsContainerStyle={styles.dotContainer}  
      autoSlide = {true} 
      slideInterval = {5000} 
     />
    </>
  );
};

const styles = StyleSheet.create({
  viewBox: {
      paddingHorizontal: 20,
      justifyContent: 'center',
      width: width,
      padding: 10,
      alignItems: 'center',
      height: 150
  },
  slider: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'pink'
  },
  dotContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: -15
  }
});

export default SliderMain1;