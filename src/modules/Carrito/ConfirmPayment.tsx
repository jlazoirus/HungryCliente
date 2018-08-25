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

  onPressArrowBack = () => {
    this.props.navigation.goBack();
  }

  showETA = () => {
    this.props.actions.checkoutEnd();
    this.props.navigation.navigate(Routes.ETAScreen)
  }
  
  render() {
    return (
        <Layout
            iconLeft="arrow-back"
            onPressLeft={this.onPressArrowBack}>

            <Text>Confirmar Tarjeta y Monto total ...</Text>
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


