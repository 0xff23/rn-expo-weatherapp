import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function RefreshData({load}) {
  const refreshIconName = Platform.OS == 'android' ? 'md-refresh' : 'ios-refresh'

  return (
    <View style={style.reloadIcon}>
      <Ionicons onPress={load} name={refreshIconName} size={24} color='black'/>
    </View>
  )
}

const style = StyleSheet.create({
  reloadIcon: {
    position: 'absolute',
    top: 30,
    right: 10
  }
})