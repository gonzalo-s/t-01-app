import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';

interface AboutScreenProps {
  navigation: any;
}

export default function AboutScreen({ navigation }: AboutScreenProps) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About This App</Text>
      
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          This is my first Expo app, created following the official Expo tutorial guide.
        </Text>
        
        <Text style={styles.paragraph}>
          The app demonstrates:
        </Text>
        
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>• React Native components</Text>
          <Text style={styles.listItem}>• TypeScript integration</Text>
          <Text style={styles.listItem}>• Custom component creation</Text>
          <Text style={styles.listItem}>• React Navigation</Text>
          <Text style={styles.listItem}>• Styling with StyleSheet</Text>
          <Text style={styles.listItem}>• Expo development workflow</Text>
        </View>
        
        <Text style={styles.paragraph}>
          Built with ❤️ using Expo and React Native.
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <CustomButton 
          title="Go Back" 
          onPress={handleGoBack}
          backgroundColor="#6c757d"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 24,
  },
  content: {
    marginBottom: 32,
  },
  paragraph: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 16,
    paddingLeft: 20,
  },
  listItem: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
    marginBottom: 8,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
  },
});