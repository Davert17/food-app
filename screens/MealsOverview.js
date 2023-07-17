import {CATEGORIES, MEALS} from "../data/dammy-data";
import { View, Text, StyleSheet,FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const styles =StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})

function MealsOverviewScreen({route, navigation}){
    const catId =  route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.includes(catId);
    })
    function renderMealItem(itemData){
        return <MealItem item={itemData.item}/>
    }

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((el)=>el.id === catId).title
        navigation.setOptions({
            title:categoryTitle
        })
    },[catId,navigation]);

   
    return (<View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={item=>item.id} renderItem={renderMealItem} />
    </View>)
}

export default MealsOverviewScreen;

