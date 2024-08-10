// ChatScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import {firestore, auth } from './firebaseConfig';

const ChatScree = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData,
          };

          return data;
        });

        setMessages(messages);
      });

    return () => unsubscribe();
  }, []);

  const handleSend = () => {
    const { uid, displayName } = auth().currentUser;

    const newMessage = {
      text: message,
      createdAt: new Date().getTime(),
      user: {
        _id: uid,
        name: displayName,
      },
    };

    firestore().collection('messages').add(newMessage);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        inverted
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.messageUser}>{item.user.name}</Text>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageUser: {
    fontWeight: 'bold',
  },
  messageText: {
    marginTop: 5,
  },
});

export default ChatScree;
