// filepath: /C:/Users/Aluno/Documents/GitHub/teste/App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground , ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function App({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://th.bing.com/th/id/OIP.Bxy5WTTLpn8UoWjx3sIxvgHaHf?rs=1&pid=ImgDetMain' }} 
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Cozinha do Chico</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
          <Card.Content>
            <Text style={styles.cardTitle}>Card Title</Text>
            <Text style={styles.cardText}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => navigation.navigate('SecondScreen')}>
              Go somewhere
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card2}>
          <Card.Cover source={{ uri: 'https://via.placeholder.com/150' }} />
          <Card.Content>
            <Text style={styles.cardTitle}>Card Title</Text>
            <Text style={styles.cardText}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => navigation.navigate('SecondScreen')}>
              Go somewhere
            </Button>
          </Card.Actions>
        </Card>
      </View>
     </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
    width: '100%',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row', // Alinha os cards lado a lado
    justifyContent: 'center', // Centraliza os cards horizontalmente
    alignItems: 'center', // Alinha verticalmente
    gap: 10, // Espaço entre os cards (disponível no React Native 0.71+)
    marginBottom: 20,
  },
  card: {
    width: 230,
    backgroundColor: 'white',
  },
  card2: {
    width: 230,
    backgroundColor: 'white',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    marginTop: 5,
  },
});