import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 5) + 1;
}
export default function App() {
  const numeroAleatorio = gerarNumeroAleatorio();
  const [personagens, setPersonagens] = useState([]);
  const baseURL = 'https://swapi.dev/api/people/?page=' + numeroAleatorio;

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPersonagens(data.results);
      })
  }, []);

  return (
    <View style={styles.container}>
      {personagens.map((personagem) => (
        <Text>{personagem.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
