import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import { Button, H4 } from 'nachos-ui';
import styled from "styled-components";
import CartItem from './CarritoItem';
import { NavigationScreenProp } from 'react-navigation';
import { Routes } from '../../Routes';
import { IStore } from '../../store/reducers/index';
import { connect } from 'react-redux';
import { CarritoActions } from '../../store/actions/CarritoActions';
import Layout from '../shared/Layout';
import { Carrito } from '../../mocks/Carrito';
import { getCheckoutListArray } from '../../store/reducers/CarritoReducers';

const S = {
    Title: styled(Text) `
        font-size: 20px;
        padding: 10px;

    `,
    Card: styled(View) `
        flex-direction: row;
        padding: 10px;
        border-bottom-color: #aa072a;
        border-bottom-width: 1px;
    `,
    Content: styled(View) `
        flex: 4;
        padding-left: 10px;
    `,
    Total: styled(View) `
        flex: 3;
        justify-content: flex-end;
    `,
}

type Props = {
    navigation: NavigationScreenProp<any>;
    carrito: any[];
    actions: any;
}

class CarritoList extends React.Component<Props, any> {


    onPressArrowBack = () => {
        this.props.navigation.goBack();
    }

    selectPayment = () => {
        this.props.navigation.navigate(Routes.PaymentsList)
    }

    componentDidUpdate () {
        console.log(this.props.items)
    }

    render() {
        return (
            <Layout iconLeft='arrow-back' onPressLeft={this.onPressArrowBack}>
                <S.Title>Checkout</S.Title>

                <ScrollView>
                    { this.props.items.map((item) => (<CartItem key={item._id} data={item} />))}
                </ScrollView>
                <S.Card>
                    <S.Content>
                        <H4>Total</H4>
                    </S.Content>
                    <S.Total>
                        <Text>S/.{this.props.total}</Text>
                    </S.Total>
                    <Button onPress={this.selectPayment}>OK</Button>
                </S.Card>
            </Layout>
        )
    }
}
const mapStateToProps = (state: IStore, ownProps) => ({
    items: getCheckoutListArray(state.Carrito)
    total: 0
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
    }
})

export default connect(mapStateToProps, null)(CarritoList);