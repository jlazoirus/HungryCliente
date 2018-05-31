import * as React from 'react'
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import { Carousel, Switcher, SegmentedControlButton, H2, H3, H4, H5, Button } from 'nachos-ui';
import styled from "styled-components";
import CartItem from './CarritoItem';
import { NavigationScreenProp } from 'react-navigation';
import { Routes } from '../../Routes';
const screen_width = Dimensions.get("window").width;

// <github project>/nachos-ui/src/SegmentedControlButton.js
const SegmentTheme = {
    BUTTON_BACKGROUND: '#fff',
    BUTTON_BORDER_WIDTH: 1,
    BUTTON_BORDER_COLOR: '#aa072a',
    BUTTON_BORDER_RADIUS: 5,
    BUTTON_HEIGHT: 30,
    BUTTON_FONT_COLOR: '#aa072a',
    BUTTON_FONT_SIZE: 14,
    BUTTON_FONT_WEIGHT: 'normal',
    BUTTON_SELECTED_BACKGROUND: '#aa072a',
    BUTTON_SELECTED_FONT_COLOR: '#fff',
    BUTTON_SELECTED_BORDER_COLOR: '#aa072a',
    BUTTON_ICON_SIZE: 15,
    BUTTON_ICON_POSITION: 'left',
    BUTTON_ICON_COLOR: '#aa072a',
    BUTTON_ACTIVE_ICON_COLOR: '#fff',
};

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
    Total: styled(View)`
        flex: 3;
        justify-content: flex-end;
    `,
}

type Props = {
  navigation: NavigationScreenProp<any>;
}

export default class CarritoList extends React.Component<Props, any> {

    constructor(props) {
        super(props)
    }

    state = {
        filter: 'precio',
        list:[1,2,3,4,5,6,7]
    }

    onPressArrowBack = () => {
        this.props.navigation.goBack();
    }

    openCarta = () => {
        this.props.navigation.navigate(Routes.Carta);
    }

  render() {
    return (
      <S.Layout>
        <S.Header>
            <Icon name='arrow-back' onPress={this.onPressArrowBack}/>
        </S.Header>

        <S.Title>Carrito de Compras</S.Title>

        <ScrollView>
            { this.state.list.map((item) => {
                return <CartItem key={item} onPressTeaser={this.openCarta} />
            } )}
        </ScrollView>
        <S.Card>
        <S.Content>
            <H4>Total</H4>
          </S.Content>
          <S.Total>
          <Text>S/.99</Text>
          </S.Total>
          <Button>OK</Button>
        </S.Card>
      </S.Layout>
    )
  }
}