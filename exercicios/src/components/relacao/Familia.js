import React from 'react';
import {Text} from 'react-native';

export default props => {
  return (
    <>
      <Text>[Início] Membros da Família:</Text>
      {props.children}
      <Text>[Depois] Membros da Família:</Text>
    </>
  );
};
