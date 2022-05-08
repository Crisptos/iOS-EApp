import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {BeReadyScreen} from '../screens/BeReady';
import {BeReadyAllScreen} from '../screens/BeReadyScreens/BeReadyAll';
import {BeReadyFireScreen} from '../screens/BeReadyScreens/BeReadyFire'; 
import {BeReadyHealthScreen} from '../screens/BeReadyScreens/BeReadyHealth'; 
import {BeReadyRoadsScreen} from '../screens/BeReadyScreens/BeReadyRoads';
import {BeReadyWeatherScreen} from '../screens/BeReadyScreens/BeReadyWeather'; 
import {BeReadyOtherScreen} from '../screens/BeReadyScreens/BeReadyOther';

const Stack = createStackNavigator();

const StackBeReadyNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Be Ready" 
                component={BeReadyScreen} 
                options={{
                    headerLeft: null
                }}
            />
            <Stack.Screen name="BRAll" component={BeReadyAllScreen} />
            <Stack.Screen name="BRFire" component={BeReadyFireScreen} />
            <Stack.Screen name="BRHealth" component={BeReadyHealthScreen} />
            <Stack.Screen name="BRRoads" component={BeReadyRoadsScreen} />
            <Stack.Screen name="BRWeather" component={BeReadyWeatherScreen} />
            <Stack.Screen name="BROther" component={BeReadyOtherScreen} />
        </Stack.Navigator>
    )
}

export default StackBeReadyNavigator;