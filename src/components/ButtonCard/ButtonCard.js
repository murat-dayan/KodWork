import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ButtonCard.style'
import Icon from 'react-native-vector-icons/AntDesign'

const ButtonCard = ({buttonName , onPressButton , iconName}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
        <Icon name={iconName} size={22} color='white' />
        <Text style={styles.text}>{buttonName}</Text>
    </TouchableOpacity>
  )
}

export default ButtonCard