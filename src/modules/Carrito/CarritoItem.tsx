import * as React from "react";
import { Text, View } from "react-native";
import { H4 } from "nachos-ui";
import styled from "styled-components";
import NumberPicker from "../shared/NumberPicker";

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
            <Text>Pequeña description del plato</Text>
          </S.Content>
          <S.ViewMore>
          <Text>Precio</Text>
          <NumberPicker></NumberPicker>
          </S.ViewMore>
        </S.Card>
      );
    }
  }
  