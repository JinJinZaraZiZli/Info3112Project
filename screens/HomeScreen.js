import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useMatches } from '../contexts/MatchContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const { setIsSubscribed } = useMatches();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Code Cupid!</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={20} color="#fff" />
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Matches')}>
        <Icon name="heart" size={20} color="#fff" />
        <Text style={styles.buttonText}>View Matches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Icon name="cog" size={20} color="#fff" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Connecting with Social Media...')}>
        <Icon name="twitter" size={20} color="#fff" />
        <Text style={styles.buttonText}>Connect with Social Media</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        setIsSubscribed(true);
        alert('Subscribed successfully!');
      }}>
        <Icon name="rss" size={20} color="#fff" />
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FindMatchScreen')}>
        <Icon name="search" size={20} color="#fff" />
        <Text style={styles.buttonText}>Find Matches</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    color: '#4a4e69',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
