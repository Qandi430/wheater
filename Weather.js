import React from 'react';
import {View, Text, StyleSheet,StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

Weather.prototype = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired,
}

const styles = StyleSheet.create({
    container : {
        flex:1,

    },
    halfContainer : {
        flex:1,
        justifyContent : "center",
        alignItems : "center",
    },
    temp : {
        fontSize : 36,
        color : "white"
    },
    title : {
        color : "white",
        fontSize : 34
    },
    subTitle : {
        color : "white",
        paddingVertical:10,
        fontWeight : "bold",
        fontSize: 20
     },
     textContainer : {
        paddingHorizontal : 20,
        alignItems : "flex-end"
     }

    })

const weatherOptions = {
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ["#30E8BF", "#FF8235"],
        title : "천둥번개",
        subTitle : "밖에 나가지 말자"
    },
    Drizzle : {
        iconName : "weather-hail",
        gradient : ["#1c92d2","#f2fcfe"],
        title : "이슬비",
        subTitle : "우산 쓸 필요 까지는..."
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ["#000046", "#1CB5E0"],
        title : "비",
        subTitle : "우산 챙겨라"
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ["#1cefff","#c0c0aa"],
        title : "눈",
        subTitle : "스키장 ㄱㄱ"
    },
    Atmosphere : {
        iconName : "weather-fog",
        gradient : ["#000C40","#F0F2F0"],
        title : "먼지",
        subTitle : "밖에 나가지 말자"
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ["#56CCF2","#2F80ED"] ,
        title : "맑음",
        subTitle : "놀러 가라"
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ["#2c3e50", "#bdc3cc7"],
        title : "구름",
        subTitle : "구름 낌"
    },
    Haze : {
        iconName : "weather-fog",
        gradient : ["#000C40","#F0F2F0"],
        title : "안개",
        subTitle : "운전조심"
    },
    Mist : {
        iconName : "weather-fog",
        gradient : ["#000C40","#F0F2F0"],
        title : "안개",
        subTitle : "운전조심"
    },
    Dust : {
        iconName : "weather-fog",
        gradient : ["#000C40","#F0F2F0"],
        title : "안개",
        subTitle : "운전조심"
    },
}

export default function Weather({temp,condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    color="white" 
                    name={weatherOptions[condition].iconName}
                />
                <Text style={styles.temp}>{temp}&deg;</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    )
}

