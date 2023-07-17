import { CATEGORIES } from "../data/dammy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";



export default function CategoriesScreen({ navigation }){

    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverView',{
                categoryId:itemData.item.id
            });
        }
        return <CategoryGridTile title={itemData.item.title} onPress={pressHandler} color={itemData.item.color}/>
    }

    return <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem} numColumns={2} />
}