import { createStackNavigator, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Login from './modules/User/Login';
import Register from './modules/User/Register';
import Logout from './modules/User/Logout';
import SplashScreen from './modules/Splash/SplashScreen';
import CategoryList from './modules/Categories/CategoryList';
import RestaurantList from './modules/Restaurant/RestaurantList';
import Carta from './modules/Restaurant/Carta';
import Historial from './modules/Historial/historialList'

export const Routes = {
    splash: 'SplashScreen',
    auth: 'auth',
    Login: 'Login',
    Register: 'Register',
    main: 'main',
    Restaurantes: 'Restaurantes',
    RestaurantList: 'RestaurantList',
    Carta: 'Carta',
    CategoryList: 'Categorías',
    cerrar_session: 'Cerrar Session',
    Historial: 'Historial',
}
const RoutesApp = createSwitchNavigator({
    SplashScreen,
    auth: createStackNavigator({
        Login,
        Register
    }, {
        headerMode: 'none'
    }),
    [Routes.main]: createDrawerNavigator({
        [Routes.Restaurantes]: createStackNavigator({
            [Routes.RestaurantList]: RestaurantList,
            [Routes.Carta]: Carta,
        }, { headerMode: 'none'}),
        [Routes.Historial]: Historial,
        [Routes.CategoryList]: CategoryList,
        [Routes.cerrar_session]: Logout
     })
});

export default RoutesApp;