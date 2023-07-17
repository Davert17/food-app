import { View, Text, StyleSheet,Image } from "react-native";
import {MEALS} from "../data/dammy-data";
import MealDetails from "../components/MealDetails";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'white'
    },
    image:{
        width:'100%',
        height:200
    }
})

export default function MealScreen({route, navigation}){
    const meal = route.params.meal;
    return <View style={styles.container}>
        
        <Image source={{uri:meal.imageUrl}} style={styles.image} />
        <Text style={styles.text}> {meal.title}</Text>
        <MealDetails item={meal} />
        <View>
            <Text style={styles.text}>
                Ingredients
            </Text>
            {meal.ingredients.map((ingerdient,i)=><Text key={i}>{ingerdient}</Text>)}
            <Text style={styles.text}>
                Steps
            </Text>
            {meal.steps.map(step=><Text>{step}</Text>)}
            {/* <Text style={styles.detailItem}>
                Duration - {item.duration}m
            </Text>
            <Text style={styles.detailItem}>
                Complexity - {item.complexity}
            </Text>
            <Text style={styles.detailItem}>
                Affirdability - {item.affordability}
            </Text> */}
        </View>
    </View>
}