import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { MMKV, useMMKV, useMMKVObject } from 'react-native-mmkv';
import { styles } from './styles';
import { useEffect, useState } from 'react';
type User = {
  name: string;
  email: string;
}

// const storage = new MMKV({ id: 'mmkv' });
export function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [user, setUser] = useMMKVObject<User>('user');

  const storage = useMMKV({ id: 'mmkv' })

  function handleSave() {
    setUser({ name, email });
  }

  function fetchUser() {
    const user = storage.getString('user');
    setUser(user ? JSON.parse(user) : {} as User);
  }

  useEffect(() => {
    const listener = storage.addOnValueChangedListener((changedKey) => {
      const newValue = storage.getString('user');
      console.log('Novo Valor', newValue);
      fetchUser()
    })
    return listener.remove();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro com MMKV Storage</Text>
      <TextInput
        placeholder="Nome"
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="E-mail"
        onChangeText={setEmail}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        {user?.name} {'\n'} {user?.email}
      </Text>

    </View>
  );
}