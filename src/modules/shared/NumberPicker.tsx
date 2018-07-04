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
    quantity: string,
    id:string,
    onUpdate: Function,
}

// todo: Create a Reusable component we can use in all the screens
class NumberPicker extends React.Component<Props, any> {
    onPlusPress = () => {
        this.props.onUpdate(this.props.id, +(this.props.quantity) + 1);
    }

    onMinusPress = () => {
        this.props.onUpdate(this.props.id, +(this.props.quantity) - 1);
    }

  render() {
    return (
        <S.Layout>
            <Icon name="remove" onPress={this.onMinusPress} />
            <Text>{this.props.quantity}</Text>
            <Icon name="add" onPress={this.onPlusPress} />
        </S.Layout>
    );
  }
}
export default(NumberPicker);