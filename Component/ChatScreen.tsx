import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

const DATA = [
  { id: '1', name: 'Satym', subtitle: 'Software Developer', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '2', name: 'Darpan', subtitle: 'FrontEnd Developer', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '3', name: 'Aniket', subtitle: 'Backend Developer', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: '4', name: 'Kartik', subtitle: 'Frontend Developer', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '5', name: 'Chaitaniya', subtitle: 'Backend Developer', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '6', name: 'Aniket', subtitle: 'Frontend Developer', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '7', name: 'Raj', subtitle: 'Backend Developer', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '8', name: 'Juhi', subtitle: 'Software Developer', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '9', name: 'Sharvari', subtitle: 'FrontEnd Developer', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '5', name: 'Chaitaniya', subtitle: 'Backend Developer', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '7', name: 'Aniket', subtitle: 'Frontend Developer', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
  { id: '8', name: 'Raj', subtitle: 'Backend Developer', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: '9', name: 'Juhi', subtitle: 'Software Developer', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '10', name: 'Sharvari', subtitle: 'FrontEnd Developer', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
];

export default function ChatScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ChatDetail', { user: item })}>
      <Avatar rounded source={{ uri: item.avatar }} size="medium" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat Room</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search to me" />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
  },
});
