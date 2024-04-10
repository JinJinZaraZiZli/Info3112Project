import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ navigation, route }) => {
  const { image, name, interests, age } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: 20 }} />}
      <Text>Name: {name || 'Not set'}</Text>
      <Text>Interests: {interests || 'Not set'}</Text>
      <Text>Age: {age || 'Not set'}</Text>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('EditProfileScreen')}
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
});

export default ProfileScreen;
