import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList, Button } from 'react-native';


const CountrySelector = ({ isVisible, onSelect, onClose }) => {
  const countries = [
    { code: '+1', name: 'United States' },
    { code: '+44', name: 'United Kingdom' },
    { code: '+61', name: 'Australia' },
    { code: '+49', name: 'Germany' },
    {code: '+91', name: 'India'},
  ];

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelect(item)} style={styles.countryOption}>
                <Text>{item.name} ({item.code})</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default function HomeScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sendotp, setotp] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', name: 'United States' });
  const [modalVisible, setModalVisible] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.Textscreen}>Welcome to Mychat</Text>
        <Button
          title="Go to Chat"
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.dropdownButtonText}>{selectedCountry.code}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter phone number"
          />
        </View>
        <TextInput
          placeholder='Enter the OTP'
          style={styles.inpute}
          value={sendotp}
          onChangeText={setotp}
        />
        <Button title='Verified' style={styles.button} />
      </View>
      <CountrySelector
        isVisible={modalVisible}
        onSelect={handleCountrySelect}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
  },
  button: {
    marginBottom: 16,
  },
  Textscreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
     textAlign: 'center',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#1f2937',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
    width: '100%',
  },
  dropdownButton: {
    paddingVertical: 12,
    paddingHorizontal: 20, 
    fontSize: 16, 
    backgroundColor: '#e5e7eb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  dropdownButtonText: {
    color: '#1f2937',
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  inpute: {
    padding: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    marginBottom: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
  },
  countryOption: {
    padding: 16,
  },
  closeButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#1f2937',
  },
});
