import { createStackNavigator, createTabNavigator, createDrawerNavigator } from 'react-navigation';

import Login from './modules/User/Login';
import { HOCHeader } from './modules/shared/Header';
import Register from './modules/User/Register';
import ExpenseModule from './modules/Expenses/ExpensesModule';
import CategoryModule from './modules/Categories/CategoryModule';
import Logout from './modules/User/Logout';
import SplashScreen from './modules/Splash/SplashScreen';
  
const ScreenHeader = (title) => ({navigation}) => ({
    title: title,
    header: HOCHeader(title)
});

const RoutesApp = createTabNavigator({
    // First Level

    splash: {
        screen: SplashScreen,
    },
    login: {
        // Second Level
        screen: createTabNavigator({
            Login: {
              screen: Login,
            },
            Register: {
              screen: Register,
            }
          }, {
            navigationOptions: {
                tabBarVisible: false
            }
        })
    },
    App: {
        // Second level
        screen: createDrawerNavigator({
            Expenses: {
              screen: ExpenseModule,
            },
            Categories: {
              screen: CategoryModule,
            },
            Logout: {
              screen: Logout
            }
        })
    }
}, {
    navigationOptions: {
        tabBarVisible: false
    }
}) ;
  
  export default RoutesApp;