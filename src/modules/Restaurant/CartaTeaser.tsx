import * as React from "react";
import { Text, View, Image } from "react-native";
import { H4, A } from "nachos-ui";
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
        flex: 3
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

export default class PlateTeaser extends React.Component {
  render() {
    return (
      <S.Card>
        <S.Image>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: "https://upx.cz/BsN" }}
          />
        </S.Image>
        <S.Content>
          <H4>NOMBRE DEL PLATO</H4>
          <Text>Description ... </Text>
          <Text>Precio</Text>
          <A>Ingredientes >>> </A>
        </S.Content>
        <S.ViewMore>
          <Icon name="add-circle" active />
        </S.ViewMore>
      </S.Card>
    );
  }
}
