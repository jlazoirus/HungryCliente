import * as React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Icon } from "native-base";

const S = {
    Layout: styled(View)`
        flex-direction: row;
        justify-content: space-between;
    `,
}

type Props = {
    quantity: string,
    id:string,
    onUpdate: Function,
}

class NumberPicker extends React.Component<Props, any> {

    static defaultProps = {
        quantity: 1
    }

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