import React from 'react';
import {View,Text, Button, Image, TouchableOpacity} from 'react-native'; 
import {globalStyles} from '../styles/globalStyles';

const AlertScreen = ({navigation}) => { 
  return (
    <View style={globalStyles.stackNavStyle}>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("AlAll")}>
            <Image
              source={require('../icons/EAPP_Icons/bell_white.png')}
              style={globalStyles.imageButton}
            />
            <Text style = {globalStyles.imageButtonText}> All </Text>
            </TouchableOpacity>
          
      <TouchableOpacity onPress={() => navigation.navigate("AlFire")}>
        <Image
          source={require('../icons/EAPP_Icons/fire_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Fire </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("AlHealth")}>
        <Image
          source={require('../icons/EAPP_Icons/medical_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Health </Text>
      </TouchableOpacity>
      </View>

      <View>
        <View>
      <TouchableOpacity onPress={() => navigation.navigate("AlRoads")}>
        <Image
          source={require('../icons/EAPP_Icons/road_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Roads </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AlWeather")}>
        <Image
          source={require('../icons/EAPP_Icons/weather_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Weather </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AlOther")}>
        <Image
          source={require('../icons/EAPP_Icons/form_white.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Other </Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
  )
}

export {AlertScreen}