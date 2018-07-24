import * as React from "react";
import { Text, View } from "react-native";
import { H4 } from "nachos-ui";
import styled from "styled-components";
import { connect } from "react-redux";
import { Icon } from 'native-base';
import { CarritoActions } from '../../store/actions/CarritoActions';


const S = {
  Card: styled(View)`
    flex-direction: row;
    padding: 10px;
    border-bottom-color: #aa072a;
    border-bottom-width: 1px;
  `,
  Content: styled(View)`
    flex: 4;
    padding-left: 10px;
  `,
  ViewMore: styled(View)`
    flex: 3;
    justify-content: center;
  `,
  Layout: styled(View)`
    flex-direction: row;
    justify-content: space-between;
    `,
};

type Props = {
  key: any;
  data: any;
  onUpdate: Function;
  actions: { [key: string]: Function }
};

class CheckoutItem extends React.Component<Props, any> {
  

    onMinusPress = () => {
      this.props.actions.updatePlate({ 
          ...this.props.data, 
          amount: this.props.data.amount ? this.props.data.amount - 1 : 0
        })
    }

    onPlusPress = () => {
        this.props.actions.updatePlate({ 
            ...this.props.data, 
            amount: this.props.data.amount + 1
          })
    }

    trash = () => {
      this.props.actions.deletePlate(this.props.data);
    }
    

  render() {
    return (
      <S.Card>
        <Icon name="trash" onPress={this.trash} />
        <S.Content>
          <H4>{this.props.data.company}</H4>
        </S.Content>
        <S.ViewMore>
          <Text>s/.{this.props.data.price}</Text>
          <S.Layout>
            <Icon name="remove" onPress={this.onMinusPress} />
            <Text>{this.props.data.amount}</Text>
            <Icon name="add" onPress={this.onPlusPress} />
          </S.Layout>
        </S.ViewMore>
      </S.Card>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: {
            updatePlate (plate) {  dispatch(CarritoActions.updatePlate(plate)) },
            deletePlate (plate) {  dispatch(CarritoActions.deletePlate(plate)) }
        }
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
