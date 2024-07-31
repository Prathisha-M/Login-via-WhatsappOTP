import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title1: {
    color: 'black',
    fontSize: 16,
    // fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  countryCodeButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  countryCodeText: {
    fontSize: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  sendOtpButton: {
    backgroundColor: '#24A1DE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: 110,
  },
  sendOtpButtonText: {
    color: '#fff',
    fontSize: 13,
  },
  otpContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  },
  verifyOtpButton: {
    backgroundColor: '#24A1DE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20, 
    width: 110,
  },
  verifyOtpButtonText: {
    color: '#fff',
    fontSize: 13,
  },
  errorMessage: {
    color: '#25D366',
    marginTop: 10,
  },
  timerText: {
    color: 'red',
  },
  authImage: {
    width: '100%',
    height: 350, 
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default styles;
