import React from 'react';
import {Button} from 'react-native';

export default props => {
  function executar() {
    console.warn('Exec!!!');
  }

  return (
    <>
      <Button
        title="Executar #01!"
        onPress={function () {
          console.warn('Exec #01!!!');
        }}
      />
      <Button
        title="Executar #02!"
        onPress={function () {
          console.warn('Exec #02!!!');
        }}
      />
    </>
  );
};
