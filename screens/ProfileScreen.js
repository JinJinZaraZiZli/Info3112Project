import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = ({ navigation, route }) => {
  const { image, name, interests, age } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.profileImage}
        />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Name: {name || "Not set"}</Text>
        <Text style={styles.infoText}>Interests: {interests || "Not set"}</Text>
        <Text style={styles.infoText}>Age: {age || "Not set"}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfileScreen")}>
        <Icon name="edit" size={20} color="#fff" />
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
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
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#ff6b6b',
    borderWidth: 3,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#4a4e69',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
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
});

export default ProfileScreen;
