import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <Button
        title="Upload Image"
        onPress={() => {
          // Simulate Image Upload
          alert('Uploading Image...');
        }}
      />
      <TextInput style={styles.input} placeholder="Edit Interests" />
      <TextInput style={styles.input} placeholder="Edit Age" />
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
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default EditProfileScreen;
