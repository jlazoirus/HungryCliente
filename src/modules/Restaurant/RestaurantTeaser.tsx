import * as React from "react";
import { Text, View, Image } from "react-native";
import { H4 } from "nachos-ui";
import { Icon } from "native-base";
import styled from "styled-components";

const S = {
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
        flex: 5;
        padding-left: 10px;
    `,
    ViewMore: styled(View)`
        flex: 1;
        justify-content: center;
    `,
};

export default class RestaurantTeaser extends React.Component {
  render() {
    return (
      <S.Card>
        <S.Image>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://upx.cz/56w" }}
          />
        </S.Image>
        <S.Content>
          <H4>NOMBRE DEL LOCAL</H4>
          <Text>Ubicacion o direccion</Text>
          <Text>Tipo de Comida</Text>
          <Text>Horario</Text>
        </S.Content>
        <S.ViewMore>
          <Icon name="arrow-dropright" />
        </S.ViewMore>
      </S.Card>
    );
  }
}
