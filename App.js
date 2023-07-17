import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from './screens/MealsOverview';
import MealScreen from './screens/MealScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
    <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories' screenOptions={
          {
            headerStyle: {backgroundColor:'#351401'},
            headerTintColor:'white',
            contentStyle:{
              backgroundColor:'#3f2f25'
            }
          }
        }>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
              title:'All cateegories'
          }} />
          <Stack.Screen name="MealsOverView" component={MealsOverviewScreen}
            options={({route, navigation})=>{
              const catID = route.params.categoryId
              return{
                  title:catID
              }
            }}
          />
          <Stack.Screen name="Meal" component={MealScreen} />
        </Stack.Navigator>
       
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
