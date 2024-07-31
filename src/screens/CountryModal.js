import React from 'react';
import { View, Text } from 'react-native';

const CountryModal = ({ country = 'USA' }) => {
  return (
    <View>
      <Text>Selected Country: {country}</Text>
    </View>
  );
};

export default CountryModal;
