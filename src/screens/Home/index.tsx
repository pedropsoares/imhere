import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { Particiant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const [newParticipant, setNewParticipant] = useState('')
  const [participants, setParticipants] = useState<string[]>([])

  function handleParticipantAdd() {
    if (participants.includes(newParticipant.trim())) {
      return Alert.alert("Participamte existente", "Já existe um participamante com esse nome")
    } else {
      setParticipants(prevState => [...prevState, newParticipant])
      setNewParticipant('')
    }
  }

  function handleParticipantRemove(participant: string) {
    Alert.alert("Remover", `Remover o participamte ${participant}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participantCurr => participantCurr !== participant))
      },
      {
        text: 'Não',
        
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={(text) => setNewParticipant(text)}
          value={newParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Particiant
            name={item}
            key={index}
            onRemove={() => { handleParticipantRemove(item) }}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no ainda? Adicione paticipamentes a sua lista de presença
          </Text>
        )}
      />

    </View>
  );
}

