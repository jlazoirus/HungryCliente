import * as React from "react";
import { Icon } from "native-base";
import { ScrollView, Text, Image, View } from "react-native";
import { H4 } from "nachos-ui";
import styled from "styled-components"
import { NavigationScreenProp } from 'react-navigation';
import * as _ from 'lodash';
import { PaymentActions } from '../../store/actions/PaymentsActions';
import { Routes } from '../../Routes';

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    getPayments: () => {}
  },
  onPressTeaser: Function,
  payment: any
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

  onPressMethod = () => {
      this.props.navigation.navigate(Routes.Payment);
  }
  openMenu = () => {
    this.props.navigation.openDrawer();
  }

  getIcon(id) {
    let result = '';
    switch(id) {
      case 1:
        result = 'https://cdn1.iconfinder.com/data/icons/simplicity-payment-methods/512/visa-512.png';
        break;
      case 2:
        result = 'https://cdn2.iconfinder.com/data/icons/shopping-online-e-commerce-store/512/mastercard-512.png';
        break;
      case 3:
        result = 'https://cdn1.iconfinder.com/data/icons/simplicity-payment-methods/512/diners_club-512.png';
        break;
      case 4:
        result = 'https://cdn0.iconfinder.com/data/icons/iconico-3/1024/21.png';
        break;
    }

    return result;
  }

  getCard(payment) {
    let text:any = payment.operator != 4 ? (
      <S.Content>
        <H4>****&nbsp;****&nbsp;****&nbsp;{payment.digits}</H4>
        <Text>{payment.expiration}</Text>
      </S.Content>
    ): <S.Content></S.Content>;

    return <S.Card key={payment.id}>
      <S.Image>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: this.getIcon(payment.operator)}}
        />
      </S.Image>
      { text }
      <S.ViewMore>
        <Icon name="arrow-dropright" onPress={this.onPressMethod} />
      </S.ViewMore>
    </S.Card>
  }

  render() {
    return (
      <S.Layout>
        <S.Header>
          <Icon name='menu' onPress={this.openMenu} />
          <Text style={{ fontSize: 30 }}>Métodos de Pago</Text>
          <Icon name='cart' active />
        </S.Header>
        <ScrollView>
            {
              _.map(this.state.list, (payment) => {
                return this.getCard(payment);
              })
            }
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
export default PaymentsList;

