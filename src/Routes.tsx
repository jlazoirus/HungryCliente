import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './modules/User/Login';
import Register from './modules/User/Register';
import Logout from './modules/User/Logout';
import SplashScreen from './modules/Splash/SplashScreen';
import RestaurantList from './modules/Restaurant/RestaurantList';


const RoutesApp = createSwitchNavigator({
    SplashScreen,
    auth: createStackNavigator({
        Login,
        Register
    }, {
        headerMode: 'none'
    }),
    main: createDrawerNavigator({
        Restaurantes: RestaurantList,
        'Cerrar Session': Logout
     })
});
  
export default RoutesApp;