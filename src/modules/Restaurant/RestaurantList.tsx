import * as React from 'react'
import { View, Text, Dimensions, Image, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import { Carousel, Switcher, SegmentedControlButton, H2, H3, H4, H5 } from 'nachos-ui';
import styled from "styled-components";
import RestaurantTeaser from './RestaurantTeaser';
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
}

type Props = {
  navigation: NavigationScreenProp<any>;
}

export default class RestaurantList extends React.Component<Props, any> {

    constructor(props) {
        super(props)
    }

    state = {
        filter: 'precio',
        list:[1,2,3,4,5,6,7]
    }

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

    openCarta = () => {
        this.props.navigation.navigate(Routes.Carta);
    }

  render() {
    return (
      <S.Layout>
        <S.Header>
            <Icon name='menu' onPress={this.openMenu}/>
            <Icon name='search' />
        </S.Header>

        <View style={{width: screen_width, height: 100}}>
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

        <S.Title>LUGARES CERCANOS A TI</S.Title>
        <Switcher onChange={filter => this.setState({ filter })} direction='row'>
          <SegmentedControlButton theme={SegmentTheme} value='precio' text='Precio' />
          <SegmentedControlButton theme={SegmentTheme} value='cercania' text='Cercania' />
          <SegmentedControlButton theme={SegmentTheme} value='rating' text='Rating' />
          <SegmentedControlButton theme={SegmentTheme} value='tiempo' text='Tiempo' />
        </Switcher>

        <ScrollView>
            { this.state.list.map((item) => {
                return <RestaurantTeaser key={item} onPressTeaser={this.openCarta} />
            } )}
        </ScrollView>

      </S.Layout>
    )
  }
}

