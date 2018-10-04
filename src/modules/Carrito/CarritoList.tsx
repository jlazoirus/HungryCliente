import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Button, H4 } from 'nachos-ui';
import styled from "styled-components";
import CartItem from './CheckoutItem';
import { NavigationScreenProp } from 'react-navigation';
import { Routes } from '../../Routes';
import { IStore } from '../../store/reducers/index';
import { connect } from 'react-redux';
import Layout from '../shared/Layout';
import { getCheckoutListArray, getTotal } from '../../store/reducers/CarritoReducers';
import { PaymentActions } from '../../store/actions/PaymentsActions';

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
    total: any;
    items: any;
    actions: any;
}

class CarritoList extends React.Component<Props, any> {


    onPressArrowBack = () => {
        this.props.navigation.goBack();
    }

    selectPayment = () => {
        this.props.actions.selectPayment(this.props.total);
        this.props.navigation.navigate(Routes.PaymentsList,{isCash: true})
    }

    render() {
        return (
            <Layout iconLeft='arrow-back' onPressLeft={this.onPressArrowBack}>
                <S.Title>Checkout</S.Title>
                <ScrollView>
                    { this.props.items.map((item) => 
                        (<CartItem key={item._id} data={item} />))}
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
const mapStateToProps = (state: IStore) => ({
    items: getCheckoutListArray(state.Carrito),
    total: getTotal(state.Carrito)
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            selectPayment (total) { dispatch(PaymentActions.addTotal(total))}
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarritoList);