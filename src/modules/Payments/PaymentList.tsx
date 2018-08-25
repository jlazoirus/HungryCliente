import * as React from "react";
import { Icon } from "native-base";
import { ScrollView, Text, Image, View } from "react-native";
import { H4 } from "nachos-ui";
import styled from "styled-components"
import { NavigationScreenProp } from 'react-navigation';
import * as _ from 'lodash';
import { PaymentActions } from '../../store/actions/PaymentsActions';
import { Routes } from '../../Routes';
import { Cards } from '../../mocks/Cards';
import { connect } from 'react-redux';
import { IStore } from '../../store/reducers/index';

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    [key: string]: Function
  },
  onPressTeaser: Function,
  payment: any,
  checkoutInProgress: boolean,
  iconLeft: string,
  
};

type State = {
};

class PaymentsList extends React.Component<Props, State> {

  state = {
    list: []
  };

  componentDidMount () {
    PaymentActions.fetchPayments().then(list => this.setState({ list }))
  }

  onPressMethod = (payment) => () => {
    if (this.props.checkoutInProgress){
      this.props.actions.addPayment({...payment});
      this.props.navigation.navigate(Routes.confirmPayment);

    } else {
      this.props.navigation.navigate(Routes.Payment);
    }
  }

  addMethod = () => {
    this.props.navigation.navigate(Routes.PaymentUpdateForm);
  }

  onPressIconLeft = () => {
    if (!this.props.checkoutInProgress) {
      this.props.navigation.openDrawer();
    } else {
      this.props.navigation.goBack();
    }
  }

  getIcon = (operatorId) => {
    return _.find(Cards, {id: operatorId}).image;
  }


  render() {
    return (
      <S.Layout>
        <S.Header>
          <Icon name={this.props.iconLeft}
               onPress={this.onPressIconLeft} />
          <Text style={{ fontSize: 30 }}>Métodos de Pago</Text>
          <Icon name='cart'/>
        </S.Header>
        <ScrollView>
            {
              _.map(this.state.list, (payment) => (
                <S.Card key={payment.id}>
                  <S.Image>
                    <Image style={{ width: 50, height: 50 }} source={{ uri: this.getIcon(payment.operator)}} />
                  </S.Image>
                  <PaymentCardText 
                    {...payment} 
                    label={payment.operator === 5 && 'Efectivo' || '**** **** **** ' + payment.digits } 
                  />
                  <S.ViewMore>
                    <Icon name="arrow-dropright" onPress={this.onPressMethod(payment)} />
                  </S.ViewMore>
                </S.Card>
              ))
            }
            <S.Card>
              <S.Image></S.Image>
              <S.Content><Text>{ 'Agregar Método de Pago' }</Text></S.Content>
              <S.ViewMore>
                <Icon name="arrow-dropright" onPress={this.addMethod} />
              </S.ViewMore>
            </S.Card>

        </ScrollView>
      </S.Layout>
    );
  }
}

const S = {
  Layout: styled(View) `
      flex: 1;
      padding-top: 20px;
      background-color: #EAE9EF;
  `,
  Header: styled(View) `
    flex-direction: row;
    justify-content: space-between;
    background-color: #aa072a;
    padding: 10px;
  `,
  Card: styled(View)`
      flex-direction: row;
      padding: 10px;
      border-bottom-color: #aa072a;
      border-bottom-width: 1px;
  `,
  Image: styled(View)`
      flex: 2
  `,
  Content: styled(View)`
      flex: 6;
      padding-left: 10px;
  `,
  ViewMore: styled(View)`
      flex: 1;
      justify-content: center;
  `,
};

const PaymentCardText = ({expiration, label}) => {
  return (
    <S.Content>
      {<H4>{label}</H4>}
      <Text>{expiration}</Text>
    </S.Content>
  )
}

const mapStateToProps = (state: IStore) => {
  return {
    checkoutInProgress: state.payment.inProgress,
    iconLeft: state.payment.inProgress && 'arrow-back' || 'menu'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: {
      addPayment(card) {  dispatch(PaymentActions.addCard(card))}
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentsList);

