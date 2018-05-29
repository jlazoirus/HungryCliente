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
    onMenuPress: Function
}

// todo: Create a Reusable component we can use in all the screens
export default class Layout extends React.Component<Props, any> {
    onPressMenu = () => {
        if (this.props.onMenuPress) {
            this.props.onMenuPress();
        }
    }

  render() {
    return (
      <S.Layout>
        <S.Header>
          <Icon name="menu" onPress={this.onPressMenu} />
          <Icon name="search" />
        </S.Header>
        { this.props.children}
      </S.Layout>
    );
  }
}