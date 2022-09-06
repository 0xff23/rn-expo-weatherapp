import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker' 

export default function UnitsPicker({unitSystem, setUnitsSystem}) {
  return (
    <View style={style.unitsSystem}>
      <Picker selectedValue={unitSystem} onValueChange={(item) => setUnitsSystem(item)} mode="dropdown" itemStyle={{fontSize: 12}}>
        <Picker.Item label="C°" value="metric"/>
        <Picker.Item label="F°" value="imperial"/>
      </Picker>
    </View>
  )
}

const style = StyleSheet.create({
  unitsSystem: {
    position: 'absolute',
    ... Platform.select({
      ios: {
        top: -60
      },
      android: {
        top: 20
      }
    }),

    left: -10,
    height: 50,
    width: 100,
  }
})