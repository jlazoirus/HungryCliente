import { createStackNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './modules/User/Login';
import Register from './modules/User/Register';
import Logout from './modules/User/Logout';
import SplashScreen from './modules/Splash/SplashScreen';
import CategoryList from './modules/Categories/CategoryList';
import RestaurantList from './modules/Restaurant/RestaurantList';
import Carta from './modules/Restaurant/Carta';
import Historial from './modules/Historial/HistorialList';
import Carrito from './modules/Carrito/CarritoList';
import PaymentsList from './modules/Payments/PaymentList';
import PaymentForm from './modules/Payments/PaymentForm';

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
    Payment: 'Método de Pago',
    Payments: 'Métodos de Pago',
    PaymentsList: 'Métodos de Pago',
    cerrar_session: 'Cerrar Session',
    Historial: 'Historial',
    Carrito: 'Carrito',
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
        [Routes.CategoryList]: createStackNavigator({
            [Routes.CategoryList]:CategoryList,
            [Routes.RestaurantList]: RestaurantList,
            [Routes.Carta]: Carta,
            [Routes.Carrito]: Carrito,
            [Routes.PaymentsList]: PaymentsList,
        }, { headerMode: 'none'}),
        [Routes.Historial]: Historial,
        [Routes.Payments]: createStackNavigator({
            [Routes.PaymentsList]: PaymentsList,
            [Routes.Payment]: PaymentForm,
        }, { headerMode: 'none'}),
        [Routes.cerrar_session]: Logout
     })
});

export default RoutesApp;