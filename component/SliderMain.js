import { View, Text } from "react-native";
import React from "react";
import { SimpleCarousel, Banner } from "react-native-simple-banner-carousel";

const SliderMain = () => {
  return (
    <View style={{ width: "100%" }}>
      <SimpleCarousel
        data={[
          {
            title: "Banner",
            source: require("../assets/banner1.jpg"),
          },
          {
            title: "Banner",
            source: require("../assets/banner2.jpg"),
          },
        ]}
        renderItem={(item, i, width) => {
          return (
            <Banner
              id={`${item.title}_${i}`}
              source={item.source}
              width={width}
              onPress={(id) => console.log(`${id} was tapped.`)}
            />
          );
        }}
      />
    </View>
  );
};

export default SliderMain;
