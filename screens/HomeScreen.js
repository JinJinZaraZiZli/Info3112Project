import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Code Cupid!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <Button
          title="View Matches"
          onPress={() => navigation.navigate('Matches')}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <Button
        title="Connect with Social Media"
        onPress={() => {
          // Simulate OAuth Integration
          alert('Connecting with Social Media...');
        }}
      />
      <Button
        title="Subscribe"
        onPress={() => {
          // Simulate Subscription Options
          alert('Subscribing...');
        }}
      />
      <Button
        title="Find Matches"
        onPress={() => navigation.navigate('FindMatchScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
