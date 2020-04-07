import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';

export default function DetailsScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Show modal" onPress={toggleModal} />
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['left', 'down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}>
        <View style={{ backgroundColor: '#fff', padding: 24 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}
