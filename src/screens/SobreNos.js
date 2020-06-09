/* eslint-disable max-len */
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
  Title, Subheading, Card, Divider, Caption,
} from 'react-native-paper';
import { FontAwesome, Foundation } from '@expo/vector-icons';

const SobreNos = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Card>
          <Card.Title title="Sobre a oficina" titleStyle={styles.title} />
          <Card.Cover
            source={require('../assets/caminhao.jpg')}
            style={styles.image}
          />
          <Card.Content>
            <Caption style={{ textAlign: 'justify' }}>
            A Riberscan combina experiência com versatilidade no atendimento, para oferecer toda a tecnologia
            de ponta que seu Scania merece, com preços acessíveis. São anos dentro da própria concessionária
            que seus fundadores acumularam para oferecer a você uma oficina mecânica completa e especializada
            </Caption>
            <Divider />
            <View>
              <Title style={styles.title}>Fale conosco</Title>
              <View style={styles.info}>
                <FontAwesome name="phone" size={24} color="#00BFFF" style={styles.icon} />
                <Subheading>(16) 1234-5678</Subheading>
              </View>
              <View style={styles.info}>
                <Foundation name="mail" size={24} color="#00BFFF" style={styles.icon} />
                <Subheading>contato@teste.com</Subheading>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 20,
  },
  image: {
    height: 230,
  },
  title: {
    alignSelf: 'center',
    color: '#00BFFF',
  },
  text: {
    textAlign: 'justify',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
});

export default SobreNos;
