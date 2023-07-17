import { View, Text, Pressable, Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:Platform.OS==='android'? 'hidden':'visible'
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        margin:8,
        fontSize:16
    },

    innerContainer:{
        borderRadius:8,
    },
    buttonPressed:{
        opacity:0.7
    },
})

export default function MealItem({item}){
    const navigation = useNavigation();
    return <View style={styles.mealItem}>
        <Pressable 
            android_ripple={{color:'#ccc'}} 
            style={({pressed})=>pressed?styles.buttonPressed:''}
            onPress={()=>{
                navigation.navigate('Meal',{
                    meal:{...item}
                })
            }}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri:item.imageUrl}} style={styles.image} />
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                </View>
                <MealDetails item={item} />
            </View>
        </Pressable> 
    </View>
}