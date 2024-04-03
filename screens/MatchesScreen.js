import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const MatchesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Matches Screen</Text>
      <View style={styles.matchContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.matchImage}
        />
        <Text style={styles.matchName}>John</Text>
      </View>
      <View style={styles.matchContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
          style={styles.matchImage}
        />
        <Text style={styles.matchName}>Jane</Text>
      </View>
      {/* Add more matches as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  matchImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  matchName: {
    fontSize: 16,
  },
});

export default MatchesScreen;
