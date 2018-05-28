import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Login from './modules/User/Login';
import Register from './modules/User/Register';
import Logout from './modules/User/Logout';
import SplashScreen from './modules/Splash/SplashScreen';
import CategoryList from './modules/Categories/CategoryList';
import ExpenseForm from './modules/Expenses/ExpenseForm';
import ExpenseList from './modules/Expenses/ExpenseList';
  

const RoutesApp = createSwitchNavigator({
    // First Level
    splash: SplashScreen,
    auth: createStackNavigator({
        Login,
        Register
    }, {
        headerMode: 'none'
    }),
    main: createDrawerNavigator({
        Expenses: createBottomTabNavigator({
            Form: ExpenseForm,
            List: ExpenseList,
        }),
        Categories: createBottomTabNavigator({
            List: CategoryList
        }),
        Logout
    })
}) ;
  
  export default RoutesApp;