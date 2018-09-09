import * as React from "react";
import { Icon } from "native-base";
import { ScrollView, Text } from "react-native";
import { NavigationScreenProp } from 'react-navigation';
import * as _ from 'lodash';
import { PaymentActions } from '../../store/actions/PaymentsActions';
import { Routes } from '../../Routes';
import { Cards } from '../../mocks/Cards';
import { connect } from 'react-redux';
import { IStore } from '../../store/reducers/index';
import S from './styles';
import PaymentCard from './PaymentCard';
import PaymentCardAddMethod from './PaymentCardAddMethod';

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
  isCash = this.props.navigation.getParam('isCash', null);
  componentDidMount() {
    PaymentActions.fetchPayments().then(
      (payments) => {
        let lista = payments;
        payments.forEach(element => {
          console.log("pago");
          console.log(element.id);
        });
        if (this.isCash) {
          lista.push({
            id: 5,
            operator: 5,
            digits: '',
            expiration: ''
          });
          console.log("add efectivo");
        }
        this.setState({list: lista});
      }
    );
  }
  /*componentDidUpdate() {
    PaymentActions.fetchPayments().then(
      (list) => {
        if (this.isCash) {
          list.push({
            id: 5,
            operator: 5,
            digits: '',
            expiration: ''
          });
        }
        this.setState({list});
      }
    );
  }*/

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
    /*if (!this.props.checkoutInProgress) {
      this.props.navigation.openDrawer();
    } else {
      this.props.navigation.goBack();
    }*/
    this.props.navigation.goBack();
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
        </S.Header>
        <ScrollView>
            { this.state.list.map((payment: any) => 
              <PaymentCard 
                key={payment.id} 
                payment={payment} 
                onPressMethod={this.onPressMethod}
                navigation={this.props.navigation} />
            )}
            <PaymentCardAddMethod navigation={this.props.navigation} />
        </ScrollView>
      </S.Layout>
    );
  }
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

