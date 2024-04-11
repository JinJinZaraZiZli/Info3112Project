import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useMatches } from '../contexts/MatchContext';
import profiles from "../profiles";
import Icon from 'react-native-vector-icons/FontAwesome';

const FindMatchScreen = () => {
  const [profileIndex, setProfileIndex] = useState(0);
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const { addMatch } = useMatches();

  const filterProfiles = () => {
    const filtered = profiles.filter(profile => {
      const profileAge = parseInt(profile.age, 10);
      return profileAge >= parseInt(minAge, 10) && profileAge <= parseInt(maxAge, 10);
    });
    setFilteredProfiles(filtered);
    setProfileIndex(0); // Reset index to start from the first of the filtered list
  };

  const handleMatch = () => {
    const currentProfile = filteredProfiles[profileIndex];
    addMatch(currentProfile);
    nextProfile();
  };

  const handleNo = () => {
    nextProfile();
  };

  const nextProfile = () => {
    setProfileIndex(prevIndex => (prevIndex + 1) % filteredProfiles.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Your Match</Text>
      <TextInput
        style={styles.input}
        placeholder="Minimum Age"
        keyboardType="number-pad"
        value={minAge}
        onChangeText={setMinAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Maximum Age"
        keyboardType="number-pad"
        value={maxAge}
        onChangeText={setMaxAge}
      />
      <TouchableOpacity style={styles.button} onPress={filterProfiles}>
        <Icon name="filter" size={20} color="#fff" />
        <Text style={styles.buttonText}>Apply Age Filter</Text>
      </TouchableOpacity>
      {filteredProfiles.length > 0 && profileIndex < filteredProfiles.length && (
        <>
          <Image source={{ uri: filteredProfiles[profileIndex].image }} style={styles.image} />
          <Text style={styles.profileText}>Name: {filteredProfiles[profileIndex].name}</Text>
          <Text style={styles.profileText}>Interests: {filteredProfiles[profileIndex].interests}</Text>
          <Text style={styles.profileText}>Age: {filteredProfiles[profileIndex].age}</Text>
          <TouchableOpacity style={styles.button} onPress={handleMatch}>
            <Icon name="heart" size={20} color="#fff" />
            <Text style={styles.buttonText}>Match</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNo}>
            <Icon name="times" size={20} color="#fff" />
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </>
      )}
      {filteredProfiles.length === 0 && (
        <Text style={styles.noMatchText}>No profiles match your filter criteria.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#4a4e69',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#ff6b6b',
    borderWidth: 3,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#ff6b6b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  profileText: {
    fontSize: 18,
    color: '#4a4e69',
    marginBottom: 5,
  },
  noMatchText: {
    fontSize: 18,
    color: '#ff6b6b',
    fontWeight: 'bold',
  },
});

export default FindMatchScreen;
