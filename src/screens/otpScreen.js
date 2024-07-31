import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import styles from '../Styles/OtpScreenStyles';
import CountryPicker from 'react-native-country-picker-modal';
import OTPTextInput from 'react-native-otp-textinput';
import Auth from '../assets/Auth1.png';

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export default function OtpScreen() {
 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [timer, setTimer] = useState(0); // Timer state
  const [canResend, setCanResend] = useState(false); // Resend button state
  const [intervalId, setIntervalId] = useState(null); // Store the interval ID
  const [otpVerified, setOtpVerified] = useState(false); // OTP verified state

  useEffect(() => {
    if (otpSent && timer > 0 && !otpVerified) {
      const id = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      setIntervalId(id); // Store the interval ID
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(intervalId); // Clear the interval when timer is 0
    }
    return () => clearInterval(intervalId); 
  }, [otpSent, timer, otpVerified]);

  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^[0-9]{10,15}$/;
    return phoneNumberPattern.test(number);
  };

  const handleSendOtp = async () => {
    if (!phoneNumber || !countryCode) {
      setErrorMessage('Please enter phone number and select country code');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage('Please enter a valid phone number');
      return;
    }

    setErrorMessage('');

    const generatedOTP = generateOtp();
    const message = `Your OTP is: ${generatedOTP}`;
    console.log("Generated OTP--------------", generatedOTP);

    try {
      const response = await fetch('http://192.168.29.43:3000/sendOtp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: `${countryCode}${phoneNumber}`,
          message: message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setOtp(generatedOTP);
        setOtpSent(true);
        setTimer(120); // Set timer to 2 minutes (120 seconds)
        setCanResend(false); // Disable resend button
        setErrorMessage(`OTP has been sent to ${countryCode} ${phoneNumber}`);
      } else {
        setErrorMessage(`Failed to send OTP: ${result.message}`);
      }
    } catch (error) {
      setErrorMessage(`An error occurred: ${error.message}`);
    }
  };

  const handleResendOtp = () => {
    setOtpSent(false);
    handleSendOtp();
  };

  const handleVerifyOtp = () => {
    if (!enteredOtp || !otp) {
      setErrorMessage('Please enter OTP.');
      return;
    }

    if (enteredOtp === otp) {
      setErrorMessage('OTP verified successfully!');
      setTimer(0);
      clearInterval(intervalId); 
      setOtpVerified(true); 
      console.log("Entered OTP-------------", enteredOtp);
    } else {
      Alert.alert(
        'Failed',
        'Invalid OTP. Please try again.',
        [{ text: 'OK', onPress: () => console.log('OTP verified!') }]
      );
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>

      <Image source={Auth} style={styles.authImage} />
      
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <Text style={styles.title1}>We will send you a verification code</Text>
      <CountryPicker
        withFilter
        withFlag
        withCallingCode
        withAlphaFilter
        visible={show}
        onSelect={(country) => {
          setCountryCode(country.callingCode[0]);
          setShow(false);
        }}
        onClose={() => setShow(false)}
      />
      <View style={styles.phoneNumberContainer}>
        <TouchableOpacity
          onPress={() => setShow(true)}
          style={styles.countryCodeButton}
        >
          <Text style={styles.countryCodeText}>
            {countryCode ? `+${countryCode}` : "Select"}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      
      <TouchableOpacity
        onPress={handleSendOtp}
        style={styles.sendOtpButton}
      >
        <Text style={styles.sendOtpButtonText}>Send OTP</Text>
      </TouchableOpacity>

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      {otpSent && !otpVerified && (
        <View style={styles.otpContainer}>
          <OTPTextInput
            inputCount={6}
            handleTextChange={setEnteredOtp}
          />
          <TouchableOpacity
            onPress={handleVerifyOtp}
            style={styles.verifyOtpButton}
          >
            <Text style={styles.verifyOtpButtonText}>Verify</Text>
          </TouchableOpacity>

          {!otpVerified && (
            <>
              <Text style={styles.timerText}>
                {`Time remaining: ${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`}
              </Text>

              {canResend && (
                <TouchableOpacity
                  onPress={handleResendOtp}
                  style={styles.verifyOtpButton}
                >
                  <Text style={styles.verifyOtpButtonText}>Resend OTP</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      )}
    </View>
    </ScrollView>
  );
}