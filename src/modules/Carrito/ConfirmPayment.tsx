import * as React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { NavigationScreenProp } from "react-navigation";
import Layout from "../shared/Layout";
import { connect } from 'react-redux';
import { IStore } from '../../store/reducers/index';
import { Button } from 'nachos-ui';
import { getCheckoutListArray, getTotal } from '../../store/reducers/CarritoReducers';
import { PaymentActions } from '../../store/actions/PaymentsActions';
import { Routes } from '../../Routes';
import PaymentCard from '../Payments/PaymentCard';
import CheckoutItem from './CheckoutItem';

const S = {
  Title: styled(Text)`
    font-size: 20px;
    padding: 10px;
  `,
  Options: styled(View)`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
  `
};

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    [key: string]: Function
  },
  payment: any,
  items: any[],
  total: any,
};

class ConfirmPayment extends React.Component<Props, any> {

  showETA = () => {
    this.props.actions.checkoutEnd();
    this.props.navigation.navigate(Routes.ETAScreen)
  }
  
  render() {
    return (
        <Layout iconLeft="arrow-back" onPressLeft={this.props.navigation.goBack}>
            <PaymentCard showViewMore={false} />
            <CheckoutItem  isEditMode={false} />
            <Button onPress={this.showETA}>Pagar</Button>
        </Layout>
    );
  }
}

const mapStateToProps = (state: IStore) => {
    return {
        payment: state.payment,
        items: getCheckoutListArray(state.Carrito),
        total: getTotal(state.Carrito) 
    }
}
const mapDispatchToProps = (dispatch) => ({
  actions: {
      checkoutEnd() { dispatch(PaymentActions.paymentFinished()) }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPayment);


