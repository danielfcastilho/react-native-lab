import React, {useState} from 'react';
import {Text} from 'react-native';
import Filho from './Filho';
import Estilo from '../estilo';

export default props => {
  const [text, setTexto] = useState('');
  const [num, setNum] = useState('');

  function exibirValor(texto, numero) {
    setTexto(texto);
    setNum(numero);
  }

  return (
    <>
      <Text style={Estilo.fontG}>
        {text}
        {num}
      </Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </>
  );
};
