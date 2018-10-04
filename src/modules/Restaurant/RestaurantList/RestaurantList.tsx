import * as React from 'react'
import { View, Text, Dimensions } from 'react-native';
import { Icon} from 'native-base';
import { Carousel } from 'nachos-ui';
import styled from "styled-components";
import { NavigationScreenProp } from 'react-navigation';
import RestaurantListBody from './RestaurantListBody';
import { IStore } from '../../../store/reducers/index';
import { getCheckoutListArray } from '../../../store/reducers/CarritoReducers';
import { connect } from 'react-redux';

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
}

class RestaurantList extends React.Component<Props, any> {

    render() {
        return (
        <S.Layout>
            <S.Header>
                <Icon name='ios-arrow-back' onPress={this.props.navigation.goBack}/>
                <Icon name='search' />
            </S.Header>
            <View style={{width: screen_width, height: 100}}>
                <Carousel width={screen_width} height={100} images={CarouselImages} />
            </View>
            <S.Title>LUGARES CERCANOS A TI </S.Title>
            <RestaurantListBody navigate={this.props.navigation.navigate} />
        </S.Layout>
        )
    }
}
const mapStateToProps = (state: IStore) => ({
    items: getCheckoutListArray(state.Carrito)
})

export default connect(mapStateToProps, null)(RestaurantList);