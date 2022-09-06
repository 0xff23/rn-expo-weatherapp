import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {colors} from '../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR} = colors;

export default function WeatherInfo({ currentWeather }) {
    const { weather: [
        {
            main, description, icon
        }
    ], 
      main : { temp },
      sys : { country },
      name,
    } = currentWeather

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style = {styles.weatherInfo }>
        <Text style = {styles.textSecondary}> { name }, { country}</Text>
        <Image style = {styles.weatherIcon} source={{uri: iconUrl}}/>
        <Text style = {styles.textPrimary} >{ temp }°</Text>
        <Text style = {styles.weatherDescription}> { description }</Text>
        <Text style = {styles.textSecondary}> { main }</Text>                
    </View>
  )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center'
    }, 
    weatherDescription: {
        textTransform: 'capitalize'
    }, 
    weatherIcon: {
        width: 150,
        height: 150,
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR
    }, 
    textSecondary: {
        fontSize: 20,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 10
    }
})