import * as React from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import { Carousel, Switcher, SegmentedControlButton } from 'nachos-ui';
import styled from "styled-components";
import RestaurantTeaser from './RestaurantTeaser';
import { NavigationScreenProp } from 'react-navigation';
import { Routes } from '../../Routes';
import { SegmentTheme } from './styles';
import { connect } from 'react-redux';
import { RestaurantsActions } from '../../store/actions/RestaurantsActions';
import { IStore } from '../../store/reducers/index';

const screen_width = Dimensions.get("window").width;

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

    openCarta = () => {
        this.props.navigation.navigate(Routes.Carta);
    }

<<<<<<< HEAD
  render() {
    return (
      <S.Layout>
        <S.Header>
            <Icon name='menu' onPress={this.openMenu}/>
            <Icon name='search' />
        </S.Header>

        <View style={{width: screen_width, height: 100}}>
            <Carousel
                width={screen_width}
                height={100}
                images={[
                    `https://placehold.it/${screen_width}/311112`,
                    `https://placehold.it/${screen_width}/59C480`,
                    `https://placehold.it/${screen_width}/546C80`,
                ]}
            />
        </View>

        <S.Title>LUGARES CERCANOS A TI</S.Title>
        <Switcher onChange={filter => this.setState({ filter })} direction='row'>
          <SegmentedControlButton theme={SegmentTheme} value='precio' text='Precio' />
          <SegmentedControlButton theme={SegmentTheme} value='cercania' text='Cercania' />
          <SegmentedControlButton theme={SegmentTheme} value='rating' text='Rating' />
          <SegmentedControlButton theme={SegmentTheme} value='tiempo' text='Tiempo' />
        </Switcher>

        <ScrollView>
            { this.state.list.map((item) => {
                return <RestaurantTeaser key={item} onPressTeaser={this.openCarta} />
            } )}
        </ScrollView>

      </S.Layout>
    )
  }
=======
    updateList = (filter: string) => {
        this.setState({filter}, 
            () => this.props.actions.getLocales(this.state.filter)
        );
    }

    render() {
        return (
        <S.Layout>
            <S.Header>
                <Icon name='menu' onPress={this.openMenu}/>
                <Icon name='search' />
            </S.Header>

            <View style={{width: screen_width, height: 200}}>
                <Carousel
                    width={screen_width}
                    height={200}
                    images={[
                        `https://placehold.it/${screen_width}/311112`,
                        `https://placehold.it/${screen_width}/59C480`,
                        `https://placehold.it/${screen_width}/546C80`,
                    ]}
                />
            </View>

            <S.Title>LUGARES CERCANOS A TI </S.Title>
            
            <Switcher onChange={this.updateList} direction='row'>
                <SegmentedControlButton theme={SegmentTheme} selected={this.state.filter == 'precio'} value='precio' text='Precio' />
                <SegmentedControlButton theme={SegmentTheme} selected={this.state.filter == 'cercania'} value='cercania' text='Cercania' />
                <SegmentedControlButton theme={SegmentTheme} selected={this.state.filter == 'rating'} value='rating' text='Rating' />
                <SegmentedControlButton theme={SegmentTheme} selected={this.state.filter == 'tiempo'} value='tiempo' text='Tiempo' />
            </Switcher>

            <ScrollView>
                { this.props.restaurants.map((item) => {
                    return <RestaurantTeaser key={item._id} data={item} onPressTeaser={this.openCarta} />
                } )}
            </ScrollView>

        </S.Layout>
        )
    }
>>>>>>> origin
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