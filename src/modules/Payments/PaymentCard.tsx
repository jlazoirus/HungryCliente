import * as React from "react";
import { Image } from "react-native";
import * as _ from "lodash";
import { Cards } from "../../mocks/Cards";
import S from "./styles";
import PaymentCardText from "./PaymentCardText";
import { Icon } from "native-base";

export default class PaymentCard extends React.PureComponent<any, any> {

  state = {
    label: ''
  }

  static defaultProps = {
    payment: {
      id: 2,
      operator: 2,
      digits: '1234',
      expiration: '01/2020'
    },
    navigation: {},
    checkoutInProgress: true,
    showViewMore: true,
    onPressMethod: () => null
  };

  componentDidMount = () => {
    this.setState({label: (this.props.payment.operator === 5 && "Efectivo") || "**** **** **** " + this.props.payment.digits})
  };
  

  getIcon = operatorId => {
    return _.find(Cards, { id: operatorId }).image;
  };

  render() {
    return (
      <S.Card>
        <S.Image>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: this.getIcon(this.props.payment.operator) }}
          />
        </S.Image>
        <PaymentCardText {...this.props.payment} label={this.state.label} />
        { this.props.showViewMore && 
          <S.ViewMore>
            <Icon
              name="arrow-dropright"
              onPress={this.props.onPressMethod(this.props.payment)}
            />
          </S.ViewMore>
        }
      </S.Card>
    );
  }
}
