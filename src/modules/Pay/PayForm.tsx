import * as React from "react";
import { Icon, Item, Input } from "native-base";
import { ScrollView, Text, View, TextInput, DatePickerIOS } from "react-native";
import styled from "styled-components"
import { NavigationScreenProp } from 'react-navigation';
import { PaymentActions } from '../../store/actions/PaymentsActions';

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {

  },
  comments: String
};

type State = {
};

class PayForm extends React.Component<Props, State> {

  state = {
    list: [],
    comments: '',
    date: new Date()
  };

  componentDidMount () {
    PaymentActions.fetchPayments().then(list => this.setState({ list }))
  }

  onPressMethod() {

  }
  onPressArrowBack = () => {
    this.props.navigation.goBack();
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

  render() {
    return (
      <S.Layout>
        <S.Header>
        <Icon name='arrow-back' active onPress={this.onPressArrowBack}/>
          <Text style={{ fontSize: 30 }}>Métodos de Pago</Text>
          <Icon name='cart' active />
        </S.Header>
        <ScrollView>
          <S.Card >
            <S.Content>

            </S.Content>
          </S.Card >
          <S.Card >
            <S.Content>
            <Item regular style={{ margin: 10 }}>
              <Input
                style={{ color: "white", fontWeight: "bold" }}
                placeholder="Número de Tarjeta"
                keyboardType="phone-pad"
                onChangeText={email => this.setState({ email })}
                value=''
              />
            </Item>
            </S.Content>
          </S.Card >
          <S.Card >
            <S.Content>
              <Item regular style={{ margin: 10 }}>
                <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Nombre en Tarjeta"
                  keyboardType="default"
                  onChangeText={email => this.setState({ email })}
                  value=''
                />
              </Item>
            </S.Content>
          </S.Card >
          <S.Card >
            <S.Content>
              <Item regular style={{ margin: 10 }}>
                <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Documento del titular"
                  keyboardType="phone-pad"
                  onChangeText={email => this.setState({ email })}
                  value=''
                />
              </Item>
            </S.Content>
          </S.Card >
          <S.Card >
            <S.Content>
              <Item regular style={{ margin: 10 }}>
                <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Celular"
                  keyboardType="phone-pad"
                  onChangeText={email => this.setState({ email })}
                  value=''
                />
              </Item>
            </S.Content>
          </S.Card>
          <S.Card >
            <S.Content>
              <Item regular style={{ margin: 10 }}>
                <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Número de Cuotas"
                  keyboardType="phone-pad"
                  onChangeText={email => this.setState({ email })}
                  value=''
                />
              </Item>
            </S.Content>
          </S.Card>
          <S.Card >
            <S.Content>
              <Item regular style={{ margin: 10 }}>
              <DatePickerIOS
                  date={ this.state.date }
                  onDateChange={this.onPressMethod}
                />
              </Item>
            </S.Content>
          </S.Card>
          <S.Card >
            <S.Content>
              <Item regular style={{ margin: 10 }}>
              <TextInput
                  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(comments) => this.setState({comments})}
                  value={this.state.comments}
                />
              </Item>
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
      padding: 5px 10px;
  `,
  Content: styled(View)`
      flex: 6;
      padding-left: 10px;
  `,
};
export default PayForm;

