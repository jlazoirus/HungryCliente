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
  onPressTeaser: Function,
  data: any,
  key: any
}

export default class RestaurantTeaser extends React.Component<Props, any> {

  onPressTeaser = () => {
    if (this.props.onPressTeaser) {
      this.props.onPressTeaser();
    }
  }

  render() {
    return (
      <S.Card>
        <S.Image>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: this.props.data.picture, cache: 'only-if-cached'}}
            
          />
        </S.Image>
        <S.Content>
          <H4>{this.props.data.company}</H4>
          <Text>{this.props.data.address}</Text>
          <Text>{this.props.data.foodType}</Text>
          <Text>{this.props.data.hour}</Text>
        </S.Content>
        <S.ViewMore>
          <Icon name="arrow-dropright" onPress={this.onPressTeaser} />
        </S.ViewMore>
      </S.Card>
    );
  }
}
