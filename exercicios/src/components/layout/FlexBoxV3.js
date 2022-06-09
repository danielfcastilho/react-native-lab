import React from 'react';
import {View, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <View style={style.FlexV2}>
      <Quadrado lado={20} cor="#ff801a" />
      <Quadrado lado={30} cor="#50d1f6" />
      <Quadrado lado={40} cor="#dd22c1" />
      <Quadrado lado={50} cor="#8312ed" />
      <Quadrado lado={60} cor="#36c9a7" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});
