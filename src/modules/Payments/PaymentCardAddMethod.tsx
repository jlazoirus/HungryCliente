import * as React from "react";
import { Icon } from "native-base";
import { Text } from "react-native";
import { Routes } from "../../Routes";
import S from "./styles";

class PaymentCardAddMethod extends React.Component<any> {


  addMethod = () => {
    this.props.navigation.navigate(Routes.PaymentUpdateForm);
  };

  render() {
    return (
      <S.Card>
        <S.Image />
        <S.Content>
          <Text>{"Agregar Método de Pago"}</Text>
        </S.Content>
        <S.ViewMore>
          <Icon name="arrow-dropright" onPress={this.addMethod} />
        </S.ViewMore>
      </S.Card>
    );
  }
}

export default PaymentCardAddMethod;