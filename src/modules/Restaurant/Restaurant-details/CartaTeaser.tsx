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
        flex: 3;
    `,
    Content: styled(View)`
        flex: 5;
        padding-left: 10px;
    `,
    H4: styled(H4)`
      padding-top: 0px;
    `,
    ViewMore: styled(View)`
        flex: 1;
        justify-content: center;
    `,
};

type Props = {
  data: any;
  onSelect: any;
}

export default class Plate extends React.Component<Props, any> {


  selectPlate = () => {
    this.props.onSelect(this.props.data);
  }

  render() {
    return (
      <S.Card>
        <S.Image>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: this.props.data.picture }}
          />
        </S.Image>
        <S.Content>
          <S.H4>{this.props.data.company}</S.H4>
          <Text>s./ {this.props.data.price}</Text>
          <Text>{this.props.data.about}</Text>
        </S.Content>
        <S.ViewMore>
          <Icon
            name="add-circle"
            onPress={this.selectPlate}/>
        </S.ViewMore>
      </S.Card>
    );
  }
}
