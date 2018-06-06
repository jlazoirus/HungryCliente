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

const S = {
    Layout: styled(View) `
        flex: 1;
        padding-top: 20px;
    `,
    Header: styled(View) `
        flex-direction: row;
        justify-content: space-between;
        background-color: #aa072a;
        padding: 10px;
    `,
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

    constructor(props) {
        super(props)
    }

    state = {
        filter: 'precio',
        list: [1, 2, 3, 4, 5, 6, 7]
    }

    onPressArrowBack = () => {
        this.props.navigation.goBack();
    }

    openCarta = () => {
        this.props.navigation.navigate(Routes.Carta);
    }

    updateCarrito = (id, quantity) => {
        const nuevoCarrito = this.props.carrito.map(
            (item) => {
                if (item._id === id) { 
                    return {...item,quantity};
                }
                return item;
            });
        this.props.actions.updateCarrito(nuevoCarrito);
    }

    render() {
        const total = this.props.carrito.reduce((acc,item) => +(item.quantity) * +(item.price) + acc, 0)
        return (
            <S.Layout>
                <S.Header>
                    <Icon name='arrow-back' onPress={this.onPressArrowBack} />
                </S.Header>

                <S.Title>Carrito de Compras</S.Title>

                <ScrollView>

                    {this.props.carrito.map((item) => {
                        return <CartItem key={item._id} data={item} onUpdate={this.updateCarrito} />
                    })}
                </ScrollView>
                <S.Card>
                    <S.Content>
                        <H4>Total</H4>
                    </S.Content>
                    <S.Total>
                        <Text>S/.{total}</Text>
                    </S.Total>
                    <Button onPress= {() => this.props.navigation.navigate(Routes.PaymentsList)}>OK</Button>
                </S.Card>
            </S.Layout>
        )
    }
}
const mapStateToProps = (state: IStore, ownProps) => ({
    carrito: state.Carrito
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        getLocales: (filter) => dispatch(CarritoActions.getAll(filter)),
        updateCarrito: (list) => dispatch(CarritoActions.UpdateCarrito(list)),
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CarritoList);