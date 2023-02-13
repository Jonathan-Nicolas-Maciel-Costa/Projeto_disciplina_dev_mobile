import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar, useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



const CustomImageCarousel = ({data}) => {
  const {width} = useWindowDimensions();
  const width_ = (width - 47) * 0.3;
  const height = width * 0.4;
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      scrollEventThrottl={16}
      snapToInterval={width_}
      decelerationRate="fast">
      {data.map((item, index) =>{
        return (
          <View  >
            <View >
              <Image style={{width:width_, height:height, borderRadius : 5, marginRight: 15, resizeMode: 'stretch'}} source={item.image} />
            </View>
          </View>
        );
      })}
    </ScrollView>

    
  );
};

export default CustomImageCarousel;

const styles = StyleSheet.create({
  image:
  {
    width: 100,
    height : 150,
    borderRadius  : 5
  }
});