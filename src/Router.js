import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from './pages/Jobs/Jobs';
import JobDetails from './pages/JobDetails/JobDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritedJobs from './pages/FavoritedJobs/FavoritedJobs';
import UserProvider from './context/Provider';

const Router = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  /*
  const StackNavigator=({navigation})=>{
    return(
      <Stack.Navigator>
        <Stack.Screen options={{title:'Jobs' , headerTitleAlign:'center' , headerTitleStyle:{color:'red'}}} name='JobsPage' component={Jobs} />
        <Stack.Screen options={{title:'Job Detail' , headerTitleAlign:'center' , headerTitleStyle:{color:'red'}}} name='JobsDetailsPage' component={JobDetails} />
      </Stack.Navigator>
    )
  }
  */

  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#FF4D4D',
            drawerActiveBackgroundColor: '#FF4D4D',
            drawerActiveTintColor: 'white',
          }}>
          <Drawer.Screen
            options={{title: 'Jobs'}}
            name="JobsPage"
            component={Jobs}
          />
          <Drawer.Screen
            options={{title: 'Favorited Jobs'}}
            name="FavoritedPage"
            component={FavoritedJobs}
          />
          <Drawer.Screen
            options={{title: 'Detail Jobs', drawerItemStyle: {display: 'none'}}}
            name="JobsDetailsPage"
            component={JobDetails}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default Router;
