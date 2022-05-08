import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {AlertScreen} from '../screens/Alert';
import {AlertAllScreen} from '../screens/AlertScreens/AlertAll';
import {AlertFireScreen} from '../screens/AlertScreens/AlertFire'; 
import {AlertHealthScreen} from '../screens/AlertScreens/AlertHealth'; 
import {AlertRoadsScreen} from '../screens/AlertScreens/AlertRoads';
import {AlertWeatherScreen} from '../screens/AlertScreens/AlertWeather'; 
import {AlertOtherScreen} from '../screens/AlertScreens/AlertOther';

const Stack = createStackNavigator();

const StackAlertNavigator = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Alert" 
                component={AlertScreen} 
                options={{
                    headerLeft: null
                }}
            />
            <Stack.Screen name="AlAll" component={AlertAllScreen} />
            <Stack.Screen name="AlFire" component={AlertFireScreen} />
            <Stack.Screen name="AlHealth" component={AlertHealthScreen} />
            <Stack.Screen name="AlRoads" component={AlertRoadsScreen} />
            <Stack.Screen name="AlWeather" component={AlertWeatherScreen} />
            <Stack.Screen name="AlOther" component={AlertOtherScreen} />
        </Stack.Navigator>
    )
}

export default StackAlertNavigator;