import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';

const OrphanageDetails: React.FC = () => {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate('OrphanagesMap')
  }

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={handleBack}>
        <Text>RETORNAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrphanageDetails;
