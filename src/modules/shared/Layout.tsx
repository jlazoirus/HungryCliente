import * as React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Icon } from "native-base";
import { Indicator } from 'nachos-ui';

type Props = {
    onPressLeft: any,
    onPressRight: any,
    iconLeft: string,
    iconRight: string,
    iconRightNumber: any
}

export default class Layout extends React.Component<Props, any> {

    static defaultProps = {
        iconLeft: 'menu',
        iconRight: 'search',
        iconRightNumber: 1,
        onPressLeft: (_) => null,
        onPressRight: (_) => null,
    }

  render() {
    return (
      <Styled.Layout>
        <Styled.Header>
          <Icon name={this.props.iconLeft} onPress={this.props.onPressLeft} />
          <IconCard 
            name={this.props.iconRight} 
            onPress={this.props.onPressRight} 
            value={this.props.iconRightNumber} 
            />
        </Styled.Header>
        { this.props.children }
      </Styled.Layout>
    );
  }
}

const IconCard = ({name, onPress, value }) => {
    const icon = <Icon name={name} onPress={onPress} />;
    
    if (!value || name !== 'cart') return icon;
    return <Indicator position='left top' value={value}>{icon}</Indicator>
    
}


const Styled = {
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