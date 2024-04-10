import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import profiles from "../profiles"

const FindMatchScreen = () => {
  const [profileIndex, setProfileIndex] = useState(0);

  const handleMatch = () => {
    nextProfile();
  };

  const handleNo = () => {
    nextProfile();
  };

  const nextProfile = () => {
    setProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Match</Text>
      {profiles[profileIndex] && (
        <>
          <Image source={{ uri: profiles[profileIndex].image }} style={styles.image} />
          <Text>Name: {profiles[profileIndex].name}</Text>
          <Text>Interests: {profiles[profileIndex].interests}</Text>
          <Text>Age: {profiles[profileIndex].age}</Text>
          <Button title="Match" onPress={handleMatch} />
          <Button title="No" onPress={handleNo} />
        </>
      )}
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain'
  },
});

export default FindMatchScreen;
