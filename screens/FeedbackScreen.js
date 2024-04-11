import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!feedback) {
      Alert.alert('Error', 'Please enter your feedback before submitting.');
      return;
    }
    setFeedback('');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);  // Optionally reset the form after a few seconds
    }, 2000);  // 2 seconds delay
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Text style={styles.title}>Feedback Form</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Type your feedback here..."
        placeholderTextColor="#ccc"
        value={feedback}
        onChangeText={setFeedback}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Icon name="paper-plane" size={20} color="#fff" />
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {submitted && <Text style={styles.confirmation}>Thank you for your feedback!</Text>}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    color: '#4a4e69',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#ff6b6b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  confirmation: {
    marginTop: 20,
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
