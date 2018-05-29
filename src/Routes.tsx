import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './modules/User/Login';
import Register from './modules/User/Register';
import Logout from './modules/User/Logout';
import SplashScreen from './modules/Splash/SplashScreen';
import RestaurantList from './modules/Restaurant/RestaurantList';
import Carta from './modules/Restaurant/Carta';

export const Routes = {
    splash: 'SplashScreen',
    auth: 'auth',
    Login: 'Login',
    Register: 'Register',
    main: 'main',
    Restaurantes: 'Restaurantes',
    RestaurantList: 'RestaurantList',
    Carta: 'Carta',
    cerrar_session: 'Cerrar Session',
}

const RoutesApp = createSwitchNavigator({
    [Routes.splash]: SplashScreen,
    [Routes.auth]: createStackNavigator({
        [Routes.Login]: Login,
        [Routes.Register]: Register
    }, {
        headerMode: 'none'
    }),
    [Routes.main]: createDrawerNavigator({
        [Routes.Restaurantes]: createStackNavigator({
            [Routes.RestaurantList]: RestaurantList,
            [Routes.Carta]: Carta,
        }, { headerMode: 'none'}),
        [Routes.cerrar_session]: Logout
     })
});
  
export default RoutesApp;