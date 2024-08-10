import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Image } from 'react-native-elements';

export default function ChatDetailScreen({ route }) {
  const { user } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Aniket', text: 'Hi, nice to meet you. How are you doing?', type: 'text' },
    { id: '2', sender: user.name, text: 'Hey, I am doing good. Thanks!', type: 'text' },
    { id: '3', sender: 'Aniket', text: 'Do you have any plans for the weekend?', type: 'text' },
    { id: '4', sender: user.name, text: 'Not yet. What about you?', type: 'text' },
    { id: '5', sender: 'Aniket', text: 'Nothing !', type: 'text' },
    { id: '6', sender: 'Aniket', text: 'where are you from ?', type: 'text' },
    { id: '7', sender: user.name, text: 'Newyork from USA', type: 'text' },
    { id: '7', sender: user.name, text: 'and you ?', type: 'text' },
    { id: '6', sender: 'Aniket', text: 'India from Nagpur', type: 'text' },
  ]);

  const sendMessage = () => {
    if (message.trim() === '') return;
    const newMessage = {
      id: String(messages.length + 1),
      sender: 'Aniket', // Assuming the current user sends the message
      text: message,
      type: 'text', // You can extend this to handle different message types
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar rounded source={{ uri: user.avatar }} size="large" />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.subtitle}>{user.subtitle}</Text>
        </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((msg) => (
          <View
            key={msg.id}
            style={[
              styles.messageItem,
              msg.sender === 'Aniket' ? styles.messageRight : styles.messageLeft,
            ]}
          >
            {msg.type === 'text' ? (
              <Text style={styles.messageText}>{msg.text}</Text>
            ) : (
              <Image source={{ uri: msg.image }} style={styles.imageMessage} />
            )}
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          multiline
        />
        <TouchableOpacity onPress={sendMessage}>
          <Button
            title="Send"
            onPress={sendMessage}
            buttonStyle={styles.sendButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
  messageContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageItem: {
    maxWidth: '80%',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  messageLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5ea',
  },
  messageRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
    marginLeft: '20%',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  imageMessage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    marginRight: 10,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});
