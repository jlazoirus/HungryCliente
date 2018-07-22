import * as React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Icon } from "native-base";

const S = {
    Layout: styled(View)`
        flex: 1;
        padding-top: 20px;
    `,
    Header: styled(View)`
        flex-direction: row;
        justify-content: space-between;
        background-color: #aa072a;
        padding: 10px;
    `,
    Title: styled(Text)`
        font-size: 20px;
        padding: 10px;

    `,
}

type Props = {
    onPressLeft: any,
    onPressRight: any,
    iconLeft: string,
    iconRight: string,
}

// todo: Create a Reusable component we can use in all the screens
export default class Layout extends React.Component<Props, any> {

    static defaultProps = {
        iconLeft: 'menu',
        iconRight: 'search',
        onPressLeft: (_) => null,
        onPressRight: (_) => null
    }

  render() {
    return (
      <S.Layout>
        <S.Header>
          <Icon name={this.props.iconLeft} onPress={this.props.onPressLeft} />
          <Icon name={this.props.iconRight} onPress={this.props.onPressRight} />
        </S.Header>
        { this.props.children }
      </S.Layout>
    );
  }
}