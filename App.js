import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [page, setPage] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const green = '#16834A';

  const Button = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  const Field = ({ placeholder, value, onChangeText, secureTextEntry }) => (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor={green} barStyle="light-content" />

      <Text style={styles.logo}>🌱 AgriAI X</Text>
      <Text style={styles.tagline}>Smart Farming, Better Future</Text>

      {page === 'login' && (
        <View style={styles.card}>
          <Text style={styles.heading}>Welcome Back</Text>
          <Text style={styles.subheading}>Login to your account</Text>

          <Field placeholder="Email address" value={email} onChangeText={setEmail} />
          <Field
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Button title="Login" onPress={() => setPage('home')} />

          <TouchableOpacity onPress={() => setPage('register')}>
            <Text style={styles.link}>Create a new account</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 'register' && (
        <View style={styles.card}>
          <Text style={styles.heading}>Create Account</Text>
          <Field placeholder="Full name" value={name} onChangeText={setName} />
          <Field placeholder="Email address" value={email} onChangeText={setEmail} />
          <Field
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Register" onPress={() => setPage('home')} />
          <TouchableOpacity onPress={() => setPage('login')}>
            <Text style={styles.link}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 'home' && (
        <View style={styles.card}>
          <Text style={styles.heading}>AgriAI X Dashboard</Text>
          <Text style={styles.subheading}>Welcome to Smart Farming 🌾</Text>

          {['Crop Recommendation', 'Plant Disease Detection', 'Weather Updates', 'Soil Reports', 'My Farm'].map(item => (
            <View style={styles.feature} key={item}>
              <Text style={styles.featureText}>{item}</Text>
            </View>
          ))}

          <Button title="My Profile" onPress={() => setPage('profile')} />
          <Button title="Settings" onPress={() => setPage('settings')} />
          <Button title="Logout" onPress={() => setPage('login')} />
        </View>
      )}

      {page === 'profile' && (
        <View style={styles.card}>
          <Text style={styles.heading}>My Profile</Text>
          <Text style={styles.profileText}>Name: {name || 'Not added'}</Text>
          <Text style={styles.profileText}>Email: {email || 'Not added'}</Text>
          <Button title="Back to Home" onPress={() => setPage('home')} />
        </View>
      )}

      {page === 'settings' && (
        <View style={styles.card}>
          <Text style={styles.heading}>Settings</Text>
          <Text style={styles.profileText}>AgriAI X App Version 1.0</Text>
          <Button title="Back to Home" onPress={() => setPage('home')} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F7F1',
    justifyContent: 'center',
    padding: 22,
    paddingTop: 55,
    paddingBottom: 40,
  },
  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#16834A',
    textAlign: 'center',
  },
  tagline: {
    textAlign: 'center',
    color: '#65756A',
    marginBottom: 28,
    marginTop: 7,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 18,
    elevation: 4,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#16834A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    textAlign: 'center',
    color: '#66736A',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D6E2D8',
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    color: '#222',
  },
  button: {
    backgroundColor: '#16834A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#16834A',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  feature: {
    backgroundColor: '#E9F5EC',
    padding: 17,
    borderRadius: 10,
    marginBottom: 12,
  },
  featureText: {
    color: '#23643C',
    fontSize: 16,
    fontWeight: '600',
  },
  profileText: {
    fontSize: 16,
    color: '#444',
    marginVertical: 10,
  },
});
