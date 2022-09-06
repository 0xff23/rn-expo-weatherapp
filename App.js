import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from './components/WeatherInfo';
import UnitsPicker from './components/UnitsPicker';
import { colors } from './utils';
import RefreshData from './components/RefreshData';
import WeatherDetails from './components/WeatherDetails';
import { OPEN_WEATHER_API_KEY } from "@env"

const URL_WEATHER_FORECAST = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem, setUnitsSystem] = useState('metric');

  useEffect(() => {
    load();
  }, [unitsSystem]);

  async function load() {
    setCurrentWeather(null)
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Access to location is needed to run the application.');
        return 
      }
      const currentLocation = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = currentLocation.coords;
      const weatherRequestUrl = `${URL_WEATHER_FORECAST}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${OPEN_WEATHER_API_KEY}`;
      
      const response = await fetch(weatherRequestUrl);
      const weatherResult = await response.json();

      if (response.ok) {
        setCurrentWeather(weatherResult);
      } else {
        setErrorMessage(weatherResult.errorMessage);
      }


    } catch (error) { }
  }

  if (currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <View style = {styles.main}>
          <UnitsPicker unitSystem={unitsSystem} setUnitsSystem={setUnitsSystem}/>
          <RefreshData load={load}/>
          <WeatherInfo currentWeather = { currentWeather } />
        </View>
      <WeatherDetails currentWeatherObject={currentWeather} unitsSystem={unitsSystem}/>
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.TEXT_COLOR}/>
        <StatusBar style="auto" />
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfcf3',
    justifyContent: 'center',
  },
  main : {
    flex: 1,
    justifyContent: 'center',
  }
});
