import { createBottomTabNavigator } from "react-navigation";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const ExpenseModule = createBottomTabNavigator({
  Home: { screen: ExpenseForm },
  Settings: { screen: ExpenseList },
});

export default ExpenseModule;