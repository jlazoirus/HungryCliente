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

type Props = {
  key: any,
  data: any,
  onSelect: (data)=> void
}

export default class HistorialTeaser extends React.Component<Props, any> {

  selectItem = () => {
    this.props.onSelect(this.props.data);
  }
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
          <Text>Fecha</Text>
          <Text>Importe</Text>
          <Text>Descripcion del pedido</Text>
        </S.Content>
        <S.ViewMore>
          <Icon name="arrow-dropright"
          onPress={this.selectItem} />
        </S.ViewMore>
      </S.Card>
    );
  }
}
