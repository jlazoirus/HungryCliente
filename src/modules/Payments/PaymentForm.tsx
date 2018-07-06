import { Icon } from "native-base";
import { ScrollView, Text, Image, View } from "react-native";
import { H4 } from "nachos-ui";
import styled from "styled-components"
import { NavigationScreenProp } from 'react-navigation';
import { PaymentActions } from '../../store/actions/PaymentsActions';
import { Cards } from '../../mocks/Cards';
import { Routes } from '../../Routes';
import * as React from "react";
import * as _ from 'lodash';

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    getPayments: () => {}
  },
  payments: any
};

type State = {
};

class PaymentForm extends React.Component<Props, State> {

  state = {
    list: []
  };

  componentDidMount () {
    PaymentActions.fetchPayments().then(list => this.setState({ list }))
  }

  onPressArrowBack = () => {
    this.props.navigation.goBack();
  }

  getIcon = (operatorId) => {
    return _.find(Cards, {id: operatorId}).image;
  }

  editMethod = () => {
    this.props.navigation.navigate(Routes.PaymentUpdateForm)
  }

  render() {
    return (
      <S.Layout>
        <S.Header>
        <Icon name='arrow-back' active onPress={this.onPressArrowBack}/>
          <Text style={{ fontSize: 30 }}>Métodos de Pago</Text>
          <Icon name='create' onPress={this.editMethod} />
        </S.Header>
        <ScrollView>
          <S.Card >
            <S.Content>
              <S.Image>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: this.getIcon(1)}}
              />
            </S.Image>
            </S.Content>
          </S.Card >
          <S.Card >
            <S.Content>
              <H4>Número de Tarjeta:</H4>
              <Text>****&nbsp;****&nbsp;****&nbsp;12342</Text>
            </S.Content>
          </S.Card>
          <S.Card>
          <S.Content>
            <H4>Fecha de Expiración</H4>
            <Text>01/20</Text>
          </S.Content>
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
  Content: styled(View)`
      flex: 6;
      padding-left: 10px;
  `,
    Image: styled(View)`
      flex: 2
  `,
};
export default PaymentForm;

