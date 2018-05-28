import {  createBottomTabNavigator } from "react-navigation";
import CategoryList from "./CategoryList";


const CategoryModule = createBottomTabNavigator({
  List: { screen: CategoryList },
});

export default CategoryModule;