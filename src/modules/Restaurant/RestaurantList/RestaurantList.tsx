import * as React from 'react'
import { View, Text, Dimensions } from 'react-native';
import { Carousel } from 'nachos-ui';
import styled from "styled-components";
import { NavigationScreenProp } from 'react-navigation';
import Layout from '../../shared/Layout';
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

    constructor(props) {
        super(props)

        this.state = {
            categoryId: this.props.navigation.state.params._id,
            categoryName: this.props.navigation.state.params.name
        }
    }
    onPressArrowBack = () => {
    this.props.navigation.goBack();
    }
    onSearch = () => {
    }

    render() {
        return (
        <Layout iconLeft='ios-arrow-back' onPressLeft={this.onPressArrowBack}>

            <View style={{width: screen_width, height: 100}}>
                <Carousel width={screen_width} height={100} images={CarouselImages} />
            </View>
            <S.Title>{this.state.categoryName}</S.Title>
            <RestaurantListBody navigate={this.props.navigation.navigate} />
        </Layout>
        )
    }
}
const mapStateToProps = (state: IStore) => ({
    items: getCheckoutListArray(state.Carrito)
})

export default connect(mapStateToProps, null)(RestaurantList);
