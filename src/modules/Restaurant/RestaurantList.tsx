import * as React from 'react'
import { View, Text, Dimensions, ScrollView, FlatList } from 'react-native';
import { Icon} from 'native-base';
import { Carousel, Switcher, SegmentedControlButton } from 'nachos-ui';
import styled from "styled-components";
import Restaurant from './RestaurantTeaser';
import { NavigationScreenProp } from 'react-navigation';
import { Routes } from '../../Routes';
import { SegmentTheme } from './styles';
import { connect } from 'react-redux';
import { RestaurantsActions } from '../../store/actions/RestaurantsActions';
import { IStore } from '../../store/reducers/index';

const screen_width = Dimensions.get("window").width;

const CarouselImages = [
    `https://placehold.it/${screen_width}/311112`,
    `https://placehold.it/${screen_width}/59C480`,
    `https://placehold.it/${screen_width}/546C80`,
]

const S = {
    Layout: styled(View)`
        flex: 1;
        padding-top: 20px;
    `,
    Header: styled(View)`
        flex-direction: row;
        justify-content: space-between;
        background-color: #aa072a;
        padding: 10px;
    `,
    Title: styled(Text)`
        font-size: 20px;
        padding: 10px;

    `,
}

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    getLocales: (filter: string) => {}
  },
  restaurants: any[]
}
class RestaurantList extends React.Component<Props, any> {

    constructor(props) {
        super(props)
    }

    state = {
        filter: 'precio'
    }

    componentDidMount () {
        // To use the list from the Store
        // We need to add a
        // (1) Create a Fetch Action into the action file
        // (2) add it in mapDispatchToProps
        // (3) add the new prop in mapStateToProps
        // (4) Add into connect()()
        // (5) Use the list form props
        this.props.actions.getLocales(this.state.filter);
    }

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    openCarta = () => {
        this.props.navigation.navigate(Routes.Carta);
    }

    updateList = (filter: string) => {
        this.setState({filter},
            () => this.props.actions.getLocales(this.state.filter)
        );
    }

    render() {
        return (
        <S.Layout>
            <S.Header>
                <Icon name='ios-arrow-back' onPress={this.goBack}/>
                <Icon name='search' />
            </S.Header>

            <View style={{width: screen_width, height: 100}}>
                <Carousel width={screen_width} height={100} images={CarouselImages} />
            </View>

            <S.Title>LUGARES CERCANOS A TI </S.Title>

            <RestaurantFilter currentFilter={this.state.filter} onSelect={this.updateList} />
            <FlatList
                data={this.props.restaurants}
                keyExtractor={ (item) => item._id}
                renderItem={({item}) => (
                    <Restaurant 
                        key={item._id} 
                        data={item} 
                        onPressTeaser={this.openCarta} 
                    />
                )}
            />
        </S.Layout>
        )
    }
}

const mapStateToProps = (state: IStore, ownProps) => ({
    restaurants: state.restaurants
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        getLocales: (filter) => dispatch(RestaurantsActions.getAll(filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);


const filters = [
    { text: 'Precio', value: 'precio'},
    { text: 'Cercania', value: 'cercania'},
    { text: 'Rating', value: 'rating'},
    { text: 'Tiempo', value: 'tiempo'},
]

const RestaurantFilter = ({ currentFilter, onSelect }) => {
    return (
        <Switcher onChange={onSelect} direction='row'>
            { filters.map(({text, value}) => (
                <SegmentedControlButton 
                    key={text} 
                    theme={SegmentTheme} 
                    selected={currentFilter === value} 
                    value={value} 
                    text={text} 
                />
            ))}
        </Switcher>
    )
}
