import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from "expo-image-picker";

const EditProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [interests, setInterests] = useState("");
  const [age, setAge] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!pickerResult.cancelled && pickerResult.assets) {
      setImage(pickerResult.assets[0].uri);
    } else {
      console.log("Image picking cancelled.");
    }
  };

  const saveProfile = () => {
    navigation.navigate("Profile", { image, name, interests, age });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Icon name="upload" size={20} color="#fff" />
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Edit Interests"
        value={interests}
        onChangeText={setInterests}
      />
      <TextInput
        style={styles.input}
        placeholder="Edit Age"
        value={age}
        onChangeText={setAge}
      />
      <TouchableOpacity style={styles.button} onPress={saveProfile}>
        <Icon name="save" size={20} color="#fff" />
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#4a4e69',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: '#ff6b6b',
    borderWidth: 3,
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
});

export default EditProfileScreen;
