import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleAboutPress = () => {
    navigation.navigate('About');
  };

  const handleGetStartedPress = () => {
    console.log('Get started with your app development!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <Text style={styles.description}>
        This is a simple Expo app following the tutorial guide. 
        Explore the features and learn about React Native development.
      </Text>
      
      <View style={styles.buttonContainer}>
        <CustomButton 
          title="Learn More" 
          onPress={handleAboutPress}
          backgroundColor="#28a745"
        />
        <CustomButton 
          title="Get Started" 
          onPress={handleGetStartedPress}
          backgroundColor="#dc3545"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
});