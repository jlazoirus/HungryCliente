import * as React from "react";
import { Text, View } from "react-native";
import { H4, A } from "nachos-ui";
import { Picker  } from "native-base";
import styled from "styled-components";

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
};

const Item = Picker.Item;
type Props = {
    onPressTeaser: Function,
    key: any
  }
export default class CartItem extends React.Component<Props, any> {

  state = {
    selected: '',
  }
    onPressTeaser = () => {
        if (this.props.onPressTeaser) {
          this.props.onPressTeaser();
        }
      }
      render() {
      return (
        <S.Card>
          <S.Content>
            <H4>NOMBRE DEL PLATO</H4>
            <Text>Description ... </Text>
            <A>Mas> </A>
          </S.Content>
          <S.ViewMore>
          <Text>Precio</Text>
          <Picker
            iosHeader="Select one"
            mode='dropdown'
            selectedValue={this.state.selected}>
            <Item label='1' value='1' />
            <Item label='2' value='2' />
            <Item label='3' value='3' />
            <Item label='4' value='4' />
        </Picker>
          </S.ViewMore>
        </S.Card>
      );
    }
  }
  