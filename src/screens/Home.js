import React from 'react';
import {
  View, StyleSheet, ScrollView, Linking,
} from 'react-native';
import {
  Title, Card, Caption, Paragraph, Divider, Colors,
} from 'react-native-paper';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Title style={styles.title}>Bem-vindo(a), Luana</Title>

        <Title style={styles.title2}>Últimas notícias</Title>
        <Card>
          <Card.Title title="Pandemia" subtitle="21/05/2020"></Card.Title>
          <Card.Cover
            source={require('../assets/noticia1.png')}
            style={styles.image}
          />
          <Card.Content>
            <Paragraph style={styles.text}>
              CNT discute com BNDES medidas econômicas para o transporte durante pandemia.
            </Paragraph>
            <Caption style={styles.link} onPress={() => Linking.openURL('https://www.cnt.org.br/agencia-cnt/cnt-discute-com-bndes-medidas-economicas-para-o-transporte-durante-pandemia')}>
              Leia mais
            </Caption>
          </Card.Content>
        </Card>
      </View>
      <Divider />
      <View>
        <Card>
          <Card.Title title="Roubo de cargas" subtitle="21/05/2020"></Card.Title>
          <Card.Cover
            source={require('../assets/noticia2.png')}
            style={styles.image}
          />
          <Card.Content>
            <Paragraph style={styles.text}>
              País registra mais de 18 mil casos de roubos de cargas em rodovias.
            </Paragraph>
            <Caption style={styles.link} onPress={() => Linking.openURL('https://www.cnt.org.br/agencia-cnt/pais-registra-mais-de-18-mil-casos-de-roubos-de-cargas-em-rodovias')}>
              Leia mais
            </Caption>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    color: '#00BFFF',
    marginTop: 40,
    paddingBottom: 20,
  },
  title2: {
    margin: 15,
    color: Colors.grey700,
  },
  image: {
    height: 180,
  },
  link: {
    color: 'blue',
  },
  text: {
    textAlign: 'justify',
  },
});

export default Home;
