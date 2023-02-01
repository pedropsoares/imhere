import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

type PropsParticiant = {
  name: string,
  onRemove: () => void
}

export function Particiant({ name, onRemove }: PropsParticiant) {

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  )
}