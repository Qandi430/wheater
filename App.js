import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import {Alert} from 'react-native';
import Axios from 'axios';
import Weather from './Weather';

const API_KEY = 'd2ed68898a5be71b09bbc1ed09d1119f';

export default class App extends React.Component{

  state = {
    isLoading : true,

  }
  getWeather = async (latitude,longitude) => {
    const {
      data : {
        main : {temp},
        weather
      }
    } = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${API_KEY}`);
    
    this.setState({
      isLoading : false,
      temp : temp,
      condition : weather[0].main
    })
  }
  getLocation = async () => {
    try {
      Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //send to api and get weather
      this.getWeather(latitude,longitude);
      
    } catch (error) {
      Alert.alert("Can't find you", "So sad...")
    }
    
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading,temp,condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
  }
}

