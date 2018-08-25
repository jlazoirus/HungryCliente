import * as React from 'react'
import { FlatList, Text } from 'react-native';
import Restaurant from './RestaurantTeaser';
import { NavigationScreenProp } from 'react-navigation';
import RestaurantFilter from './RestaurantFilter';
import { Routes } from '../../../Routes';
import { RestaurantsActions } from '../../../store/actions/RestaurantsActions';
import { connect } from 'react-redux';
import { IStore } from '../../../store/reducers';


type Props = {
  navigation: NavigationScreenProp<any>;
  getRestaurants: any;
  restaurants: any[];
  navigate: any
}
class RestaurantListBody extends React.Component<Props, any> {

    constructor(props) {
        super(props)
    }

    state = {
        filter: 'precio'
    }

    componentDidMount () {
        this.props.getRestaurants(this.state.filter);
    }

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

    openCarta = () => {
        this.props.navigate(Routes.Carta);
    }

    updateList = (filter) => {
        this.setState({filter});
        this.props.getRestaurants(filter)
    }

    render() {
        return (
            <React.Fragment>
                <RestaurantFilter currentFilter={this.state.filter} onSelect={this.updateList} />
                <FlatList
                    data={this.props.restaurants}
                    keyExtractor={ (item) => item._id}
                    renderItem={({item}) => (
                        <Restaurant key={item._id}  data={item} onPressTeaser={this.openCarta} />
                    )}
                />
                { !this.props.restaurants.length && <Text>No hay items {this.state.filter}</Text> }
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ restaurants = [] }: IStore) => ({
    restaurants: restaurants
})

const mapDispatchToProps = {
    getRestaurants: RestaurantsActions.getAll
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListBody);
