import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useMatches } from '../contexts/MatchContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const MatchesScreen = ({ navigation }) => {
  const { matches, isSubscribed } = useMatches();

  const handleProfilePress = (profile) => {
    if (isSubscribed) {
      navigation.navigate('Chat', { name: profile.name, image: profile.image });
    } else {
      alert('Please subscribe to start chatting.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Matches</Text>
      {matches.map((match, index) => (
        <TouchableOpacity key={index} onPress={() => handleProfilePress(match)} style={styles.matchContainer}>
          <Image
            source={{ uri: match.image }}
            style={styles.matchImage}
          />
          <Text style={styles.matchName}>{match.name}</Text>
          <Icon name="comments" size={20} color="#4a4e69" style={styles.icon} />
        </TouchableOpacity>
      ))}
      {!isSubscribed && <Text style={styles.subscriptionText}>Please subscribe to chat with your matches.</Text>}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 26,
    color: '#4a4e69',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  matchImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  matchName: {
    fontSize: 18,
    color: '#4a4e69',
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  subscriptionText: {
    fontSize: 16,
    color: '#ff6b6b',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default MatchesScreen;
