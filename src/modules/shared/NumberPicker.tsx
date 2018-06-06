import * as React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Icon } from "native-base";

const S = {
    Layout: styled(View)`
        flex-direction: row;
        justify-content: space-between;
    `,
    Minus: styled(Icon)`
        flex: 1;
        border-color: #aa072a;
        border-width: 1px;
        border-radius: 25px;
    `,
    Plus: styled(Icon)`
        width: 20px;
        flex: 1;
        border-color: #aa072a;
        border-width: 1px;
        border-radius: 25px;
    `,
    Number: styled(Text)`
        width: 20px;
        font-size: 18px;
        flex: 1;
    `,
}

type Props = {
    onPlusPress: Function,
    onMinusPress: Function
}

// todo: Create a Reusable component we can use in all the screens
export default class Layout extends React.Component<Props, any> {
    onPlusPress = () => {
        if (this.props.onPlusPress) {
            this.props.onPlusPress();
        }
    }

    onMinusPress = () => {
        if (this.props.onMinusPress) {
            this.props.onMinusPress();
        }
    }

  render() {
    return (
        <S.Layout>
            <Icon name="remove-circle-outline" onPress={this.onMinusPress} />
            <Text>4</Text>
            <Icon name="add-circle-outline" onPress={this.onPlusPress} />
        </S.Layout>
    );
  }
}