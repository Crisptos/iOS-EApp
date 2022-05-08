import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AdvisoryScreen} from '../screens/Advisory';
import {AdvisoryAllScreen} from '../screens/AdvisoryScreens/AdvisoryAll';
import {AdvisoryFireScreen} from '../screens/AdvisoryScreens/AdvisoryFire'; 
import {AdvisoryHealthScreen} from '../screens/AdvisoryScreens/AdvisoryHealth'; 
import {AdvisoryRoadsScreen} from '../screens/AdvisoryScreens/AdvisoryRoads';
import {AdvisoryWeatherScreen} from '../screens/AdvisoryScreens/AdvisoryWeather'; 
import {AdvisoryOtherScreen} from '../screens/AdvisoryScreens/AdvisoryOther';

const Stack = createStackNavigator();

const StackAdvisoryNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Advisory" 
                component={AdvisoryScreen}
                options={{
                    headerLeft: null,
                }}
            />
            <Stack.Screen name="AdAll" component={AdvisoryAllScreen}/>
            <Stack.Screen name="AdFire" component={AdvisoryFireScreen} />
            <Stack.Screen name="AdHealth" component={AdvisoryHealthScreen} />
            <Stack.Screen name="AdRoads" component={AdvisoryRoadsScreen} />
            <Stack.Screen name="AdWeather" component={AdvisoryWeatherScreen} />
            <Stack.Screen name="AdOther" component={AdvisoryOtherScreen} />
        </Stack.Navigator>
    )
}

export default StackAdvisoryNavigator;