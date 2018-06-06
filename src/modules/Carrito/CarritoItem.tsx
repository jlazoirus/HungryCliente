import * as React from "react";
import { Text, View } from "react-native";
import { H4 } from "nachos-ui";
import styled from "styled-components";
import NumberPicker from "../shared/NumberPicker";
import { connect } from 'react-redux';

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
    key: any,
    data: any,
    onUpdate: Function,
  }
export default class CartItem extends React.Component<Props, any> {
    
    state = {
        selected: '',
    }
      render() {
        const {company, about, price, quantity, _id} = this.props.data;
        return (
          <S.Card>
            <S.Content>
              <H4>{company}</H4>
            </S.Content>
            <S.ViewMore>
            <Text>s/.{price}</Text>
            <NumberPicker 
              quantity= {quantity}
              id={_id}
              onUpdate= {this.props.onUpdate}>
            </NumberPicker>
            </S.ViewMore>
          </S.Card>
        );
    }
  }
  