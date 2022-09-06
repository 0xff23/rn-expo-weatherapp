import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR, TEXT_COLOR } = colors

export default function WeatherDetails({ currentWeatherObject, unitsSystem }) {
    const {
        main: { feels_like, humidity, pressure },
        wind: { speed }
    } = currentWeatherObject;

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

    return (
        <View style={style.weatherDetails}>
            <View style={style.weatherDetailsRow}>
                <View style={{ ...style.weatherDetailsBox, borderRightWidth: 0.5, borderRightColor: BORDER_COLOR }}>
                    <View style={style.weatherDetailsRow}>
                        <FontAwesome5 name="temperature-low" size={20} color={PRIMARY_COLOR} />
                        <View style={style.weatherDetailsItems}>
                            <Text>Feels like: </Text>
                            <Text style={style.textSecondary}>{feels_like}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.weatherDetailsBox}>
                    <View style={style.weatherDetailsRow}>
                        <MaterialCommunityIcons name="water" size={30} color={PRIMARY_COLOR} />
                        <View style={style.weatherDetailsItems}>
                            <Text>Humidity: </Text>
                            <Text style={style.textSecondary}>{humidity}%</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{...style.weatherDetailsRow, borderTopWidth: 0.5, borderTopColor: BORDER_COLOR }}>
                <View style={{ ...style.weatherDetailsBox, borderRightWidth: 0.5, borderRightColor: BORDER_COLOR }}>
                    <View style={style.weatherDetailsRow}>
                        <MaterialCommunityIcons name="weather-windy" size={30} color={PRIMARY_COLOR} />
                        <View style={style.weatherDetailsItems}>
                            <Text>Wind speed: </Text>
                            <Text style={style.textSecondary}>{windSpeed}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.weatherDetailsBox}>
                    <View style={style.weatherDetailsRow}>
                        <MaterialCommunityIcons name="speedometer" size={30} color={PRIMARY_COLOR} />
                        <View style={style.weatherDetailsItems}>
                            <Text>Pressure: </Text>
                            <Text style={style.textSecondary}>{pressure} hPa</Text>
                        </View>
                    </View>
                </View>



            </View>
        </View>
    )
}

const style = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        margin: 10,
        borderWidth: 0.5,
        borderColor: BORDER_COLOR,
        borderRadius: 10
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    textSecondary: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7
    }
})