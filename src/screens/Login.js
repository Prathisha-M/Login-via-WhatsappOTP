import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginStyles from '../Styles/LoginStyles'; 

const Login = ({ navigation }) => {
  return (
    <View style={LoginStyles.container}>
      <Image
        source={require('../assets/shield.jpg')}
        style={LoginStyles.logo}
      /> 
 
      <TextInput
        style={LoginStyles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={LoginStyles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      <TouchableOpacity style={LoginStyles.loginButton}>
        <Text style={LoginStyles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={LoginStyles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <Text style={LoginStyles.title}>Login Via</Text>
      
      <TouchableOpacity
        style={LoginStyles.whatsappButton}
        onPress={() => navigation.navigate('otpScreen', { method: 'whatsapp' })}
      >
        <Icon name="whatsapp" size={20} color="#25D366" />
        <Text style={LoginStyles.whatsappButtonText}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={LoginStyles.whatsappButton}
        onPress={() => navigation.navigate('otpScreen', { method: 'phone' })}
      >
        <Icon name="phone" size={20} color="#3366B6" />
        <Text style={LoginStyles.whatsappButtonText}>Phone Number</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={LoginStyles.whatsappButton}
        onPress={() => navigation.navigate('otpScreen', { method: 'email' })}
      >
        <Icon name="envelope" size={20} color="#BE8C4D" />
        <Text style={LoginStyles.whatsappButtonText}>Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
