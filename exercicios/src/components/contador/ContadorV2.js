import React, {useState} from 'react';
import {Text} from 'react-native';
import Estilo from '../estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorButton from './ContadorButton';
export default props => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={Estilo.fontG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorButton inc={inc} dec={dec} />
    </>
  );
};
