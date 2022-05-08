import React from 'react'; 
import {View,Text, Button,Image, TouchableOpacity} from 'react-native'; 
import {globalStyles} from '../styles/globalStyles';


const AdvisoryScreen = ({navigation}) => { 
    return (
      <View style={globalStyles.stackNavStyle}>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("AdAll")}>
            <Image
              source={require('../icons/EAPP_Icons/bell_white.png')}
              style={globalStyles.imageButton}
            />
            <Text style = {globalStyles.imageButtonText}> All </Text>
            </TouchableOpacity>
          
      <TouchableOpacity onPress={() => navigation.navigate("AdFire")}>
        <Image
          source={require('../icons/EAPP_Icons/fire_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Fire </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("AdHealth")}>
        <Image
          source={require('../icons/EAPP_Icons/medical_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Health </Text>
      </TouchableOpacity>
      </View>

      <View>
        <View>
      <TouchableOpacity onPress={() => navigation.navigate("AdRoads")}>
        <Image
          source={require('../icons/EAPP_Icons/road_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Roads </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AdWeather")}>
        <Image
          source={require('../icons/EAPP_Icons/weather_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Weather </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AdOther")}>
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


export {AdvisoryScreen}