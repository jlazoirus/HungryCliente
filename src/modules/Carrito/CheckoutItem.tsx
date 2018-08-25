import * as React from "react";
import { Text } from "react-native";
import { H4 } from "nachos-ui";
import { connect } from "react-redux";
import { Icon } from 'native-base';
import { CarritoActions } from '../../store/actions/CarritoActions';
import { S } from './styles';

class CheckoutItem extends React.Component<any, any> {

  static defaultProps = {
    isEditMode: true,
    data: {
      "_id": "5b145c1470f640e29f76fdb9",
      "index": 0,
      "price": "67.86",
      "picture": "https://upx.cz/56w",
      "company": "PARLEYNET",
      "quantity": "1",
    }
  }
  

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
        { this.props.isEditMode && <Icon name="trash" onPress={this.trash} />}
        <S.Content>
          <H4>{this.props.data.company}</H4>
        </S.Content>
        <S.ViewMore>
          <Text>s/.{this.props.data.price}</Text>
          <S.Layout>
            { this.props.isEditMode && <Icon name="remove" onPress={this.onMinusPress} />}
            <Text>{this.props.data.amount}</Text>
            { this.props.isEditMode && <Icon name="add" onPress={this.onPlusPress} /> }
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
