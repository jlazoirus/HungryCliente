import * as React from 'react'
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import { Carousel, Switcher, SegmentedControlButton, H2, H3, H4, H5 } from 'nachos-ui';
import * as rne from 'react-native-elements';
import styled from "styled-components";
import { Routes } from '../../Routes';

import { NavigationScreenProp } from 'react-navigation';
import PlateTeaser from './CartaTeaser';
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
    Options: styled(View)`
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 10px;
    `,
}

type Props = {
  navigation: NavigationScreenProp<any>;
}

export default class Carta extends React.Component<Props, any> {

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

    onPressCart = () => {
        this.props.navigation.navigate(Routes.Carrito);
    }

  render() {
    return (
      <S.Layout>
        <S.Header>
            <Icon name='arrow-back' active onPress={this.onPressArrowBack}/>
            <Icon name='cart' active onPress={this.onPressCart}/>
        </S.Header>

        <View style={{width: screen_width, height: 200}}>
            <Carousel
                width={screen_width}
                height={100}
                images={[
                    `https://placehold.it/${screen_width}/311112`,
                    `https://placehold.it/${screen_width}/59C480`,
                    `https://placehold.it/${screen_width}/546C80`,
                ]}
            />
        </View>

        <S.Title>Nombre del Negocio</S.Title>
        
        <ScrollView>
            <S.Options>
                <View>
                    <rne.Icon raised name='bicycle' type='font-awesome' color='#aa072a' onPress={() => console.log('hello')} />
                    <Text>Para Llevar</Text>
                </View>
                <View>
                    <rne.Icon raised name='calendar' type='font-awesome' color='#aa072a' onPress={() => console.log('hello')} />
                    <Text>Reservar</Text>
                </View>
                <View>
                    <rne.Icon raised name='paper-plane' type='font-awesome' color='#aa072a' onPress={() => console.log('hello')} />
                    <Text>Delivery</Text>
                </View>
            </S.Options>
            { this.state.list.map((item) => {
                return <PlateTeaser key={item} />
            } )}
        </ScrollView>

      </S.Layout>
    )
  }
}

