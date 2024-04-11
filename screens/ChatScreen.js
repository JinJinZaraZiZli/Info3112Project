import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChatScreen = ({ route }) => {
  const scrollViewRef = useRef();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [replyIndex, setReplyIndex] = useState(0);
  const { name } = route.params;

  const replies = ["Hi", "I'm good and you?", "Nice to meet you"];

  const sendMessage = () => {
    if (text) {
      const newMessage = {
        id: new Date().getTime(),
        text: text,
        sender: 'user'
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setText('');

      setTimeout(() => {
        const replyMessage = {
          id: new Date().getTime(),
          text: replies[replyIndex],
          sender: 'bot'
        };
        setMessages(prevMessages => [...prevMessages, replyMessage]);
        setReplyIndex((replyIndex + 1) % replies.length);
      }, 3000);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Text style={styles.header}>{`Chat with ${name}`}</Text>
      <ScrollView
        style={styles.messagesContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, index) => (
          <Text key={index} style={styles.message(msg.sender)}>
            {msg.text}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type your message here..."
          placeholderTextColor="#ccc"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Icon name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  header: {
    fontSize: 22,
    color: '#4a4e69',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  messagesContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  message: sender => ({
    backgroundColor: sender === 'user' ? '#dcf8c6' : '#e9ecef',
    padding: 10,
    borderRadius: 20,
    marginVertical: 4,
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
    maxWidth: '75%',
  }),
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
    marginRight: 8,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#ff6b6b',
    borderRadius: 50,
  }
});

export default ChatScreen;
