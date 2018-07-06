import * as React from "react";
import * as _ from 'lodash';

import { Icon, Input } from "native-base";
import { ScrollView, Text, View, Button } from "react-native";
import styled from "styled-components"
import { NavigationScreenProp } from 'react-navigation';
import { PaymentActions } from '../../store/actions/PaymentsActions';
import { Cards } from '../../mocks/Cards';

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    getPayments: () => {}
  },
  payments: any
};

type State = {
};

class PaymentUpdateForm extends React.Component<Props, State> {

  state = {
    list: [],
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  componentDidMount () {
    PaymentActions.fetchPayments().then(list => this.setState({ list }))
  }

  onPressMethod = () => {

  }
  onPressArrowBack = () => {
    this.props.navigation.goBack();
}

  getIcon(operatorId) {
    return _.find(Cards, {id: operatorId}).image;
  }
  saveMethod = () => {
    // TODO: save card data
    this.onPressArrowBack();
  }

  render() {
    return (
      <S.Layout>
        <S.Header>
        <Icon name='arrow-back' active onPress={this.onPressArrowBack}/>
          <Text style={{ fontSize: 30 }}>Métodos de Pago</Text>
          <Icon name='create' active />
        </S.Header>
        <ScrollView>
          <S.Card >
            <S.Content>
              <Input
                  style={{ color: "black", fontWeight: "bold" }}
                  placeholder="Número de tarjeta"
                  placeholderTextColor='black'
                  onChangeText={cardNumber => this.setState({ cardNumber })}
                  value={this.state.cardNumber}/>
            </S.Content>
          </S.Card >
          <S.Card >
            <S.Content>
            <Input
                  style={{ color: "black", fontWeight: "bold" }}
                  placeholder="Fecha Expiración"
                  placeholderTextColor='black'
                  onChangeText={expirationDate => this.setState({ expirationDate })}
                  value={this.state.expirationDate}
            />
            <Input
                  style={{ color: "black", fontWeight: "bold" }}
                  placeholder="CVV"
                  placeholderTextColor='black'
                  onChangeText={cvv => this.setState({ cvv })}
                  value={this.state.cvv}
            />
            </S.Content>
          </S.Card>
          <Button
            onPress={this.saveMethod}
            title="Guardar"
            color="red"
          />
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
export default PaymentUpdateForm;

