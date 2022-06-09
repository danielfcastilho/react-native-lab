import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilo';

export default props => {
  const {min, max} = props;
  return (
    <Text style={Estilo.fontG}>
      {Math.floor(Math.random() * (max - min + 1)) + min}
    </Text>
  );
};
