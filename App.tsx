import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.portfolioText}>Portfolio</Text>
        <Image source={require('./aniket.jpg')} style={styles.image}></Image>
      </View>
      <View style={styles.card}>
        <Text style={styles.nameText}>I'm, Aniket Gaikwad</Text>
        <Text style={styles.aboutTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          I started working as a designer when I was in high school. I was fully optimistic about drawing. I can do anything any time and not wait for the right moment.
        </Text>
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Contact me</Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text>GH Raisoni College of Engineering Nagpur</Text>
        <Text>Btech Artificial Intelligence</Text>
        <Text>2021-2025</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <Text>I am third runner-up in the National IT Quiz organized by TCS (Tata Consultancy Services) and the Karnataka government.</Text>
        <Text>I am second runner-up in the College Python Hackathon organized by GHRC and IEEE Members.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text>Python</Text>
        <Text>Data Analyst</Text>
        <Text>SQL Query</Text>
        <Text>Machine Learning</Text>
        <Text>Data Visualization</Text>
        <Text>React.js</Text>
        <Text>Tailwind CSS</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certification</Text>
        <Text>Accenture Data Analyst and Visualization</Text>
        <Text>Participation in Limica Speakathon organized by GHRC</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text>Email: aniketgaikwad72002@gmail.com</Text>
        <Text>Mobile number: +917058293067</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Language</Text>
        <Text>English</Text>
        <Text>Hindi</Text>
      </View>
       
       <View style={styles.section}>
         <Text style={styles.sectionTitle}>Project</Text>
         <Text style={styles.aboutTitle}>Crime Prediction</Text>
          <Text style={styles.aboutText}>using machine learining to predict the crime in local area on the basis of their education aand past crime and their income source</Text>
         <Text style={styles.aboutTitle}>Table Tennise bat detection </Text>
         <Text style={styles.aboutText}>Table Tennise bat and ball prediction on real time by using python library Opencv and train model  to predict ball spot for playler to trained well  by using system to improve skill and mindset of playler</Text>
         
       </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    justifyContent: 'center',
    transform: [{ perspective: 1000 }, { rotateX: '10deg' }],
  },
  portfolioText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
  image: {
    padding :7,
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 16,
    transform: [{ perspective: 1000 }, { rotateY: '15deg' }],
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    transform: [{ perspective: 1000 }, { rotateY: '3deg' }],
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 10,
    textAlign: 'center',
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#666',
  },
  aboutText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 16,
  },
  badgeContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 14,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    transform: [{ perspective: 1000 }, { rotateX: '-3deg' }],
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  loginText: {
    color: 'blue',
    fontSize: 20,
    margin: 7,
  },
});

export default App;
