import React, {useState, useEffect} from 'react'; 
import {View, Text, Button, Image, TouchableOpacity, RefreshControl, FlatList, Alert} from 'react-native'; 
import {globalStyles} from '../styles/globalStyles';
import {fetchCurrentAlert} from '../utils/dbFunctions';

const AlertScreen = ({navigation}) => { 
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const getCurrentAlert = async () => {
    fetchCurrentAlert()
        .then((dbResult) => { 
          console.log(dbResult["rows"]["_array"])
          setData(dbResult["rows"]["_array"])
          setLoading(false)
        })
        .catch(err => { 
          console.log(err)
        })
    }
    
    const onRefresh = () => { 
      setData([])
      getCurrentAlert()
    }

    const getItem = (item) => { 
      Alert.alert(
          item.category,
          item.description
        )
    }

    const ItemSeparatorView = () => { 
      return (
        <View/>
      )
    }

    useEffect(() => {
      getCurrentAlert()
    },[])

  return (
    <View style={globalStyles.stackNavStyle}>
      <View>
      <Text>Current Alert</Text>
          <FlatList 
            style={{paddingBottom: 50}}
            data={data}
            keyExtractor={item => item.incidentId}
            renderItem={({item}) => (
              <View >
                <TouchableOpacity style={globalStyles.item} onPress={() => getItem(item)}>
                  <Text style={{fontSize:20}}>{item.title}</Text>
                  <Text style={{fontSize:15}}>{item.timeOfEvent}</Text>
                </TouchableOpacity>
              </View>
            )}
            ItemSeparatorComponent={ItemSeparatorView}
            scrollEnabled={true}
            refreshControl={ 
              <RefreshControl 
                refreshing={isLoading}
                onRefresh={onRefresh}
              />
            }
          />
      </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("All")}>
            <Image
              source={require('../icons/EAPP_Icons/bell_white.png')}
              style={globalStyles.imageButton}
            />
            <Text style = {globalStyles.imageButtonText}> All </Text>
            </TouchableOpacity>
          
      <TouchableOpacity onPress={() => navigation.navigate("Fire")}>
        <Image
          source={require('../icons/EAPP_Icons/fire_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Fire </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Health")}>
        <Image
          source={require('../icons/EAPP_Icons/medical_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Health </Text>
      </TouchableOpacity>
      </View>

      <View>
        <View>
      <TouchableOpacity onPress={() => navigation.navigate("Roads")}>
        <Image
          source={require('../icons/EAPP_Icons/road_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Roads </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Weather")}>
        <Image
          source={require('../icons/EAPP_Icons/weather_tab.png')}
          style={globalStyles.imageButton}
        />
        <Text style = {globalStyles.imageButtonText}> Weather </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Other")}>
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