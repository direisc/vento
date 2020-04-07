import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 36 }}>
        <View
          style={{
            width: 68,
            height: 68,
            borderRadius: 16,
            marginBottom: 100,
            backgroundColor: '#1DB2F1',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>V</Text>
        </View>
        <Text
          style={{
            marginBottom: 28,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#1DB2F1',
            alignSelf: 'flex-start',
          }}>
          Bem vindo(a)!
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#737B87',
            width: '100%',
            height: 40,
            paddingHorizontal: 16,
            borderRadius: 5,
            marginBottom: 8,
          }}
          placeholder="Email"
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#737B87',
            width: '100%',
            height: 40,
            paddingHorizontal: 16,
            borderRadius: 5,
            marginBottom: 8,
          }}
          placeholder="Senha"
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#1DB2F1',
            borderRadius: 5,
            height: 40,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
          }}
          onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
          <Text style={{ color: '#fff' }}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#1DB2F1',
            borderRadius: 5,
            height: 40,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 8,
          }}
          onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
          <Text style={{ color: '#fff' }}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: '#1DB2F1',
            borderWidth: 1,
            borderRadius: 5,
            height: 40,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
            marginBottom: 8,
          }}
          onPress={() => navigation.navigate('Main', { screen: 'Home' })}>
          <Text style={{ color: '#1DB2F1' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
