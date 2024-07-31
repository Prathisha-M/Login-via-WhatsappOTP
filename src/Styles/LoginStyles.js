import { StyleSheet } from 'react-native';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
 
  whatsappButtonText: {
    color: '#000',
    marginLeft: 10,
    fontSize: 18,
  },
  // container1: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#fff',
  // },
  logo: {
    width: 180,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  whatsappButton: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#24A1DE',
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    width: 200,
  },
  loginButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#24A1DE',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#3897f0',
    fontSize: 14,
  },
});

export default LoginStyles;
