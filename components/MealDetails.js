import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        details:{
        
            padding:8
        },
        detailItem:{
            marginHorizontal:4,
            fontSize:12
        },
    }
)

export default function MealDetails({item}){
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>
                Duration - {item.duration}m
            </Text>
            <Text style={styles.detailItem}>
                Complexity - {item.complexity}
            </Text>
            <Text style={styles.detailItem}>
                Affirdability - {item.affordability}
            </Text>
        </View>)
}