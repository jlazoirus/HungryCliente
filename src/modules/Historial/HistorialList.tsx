import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import styled from "styled-components";
import { NavigationScreenProp } from 'react-navigation';
import HistorialTeaser from './HistorialTeaser';

// <github project>/nachos-ui/src/SegmentedControlButton.js


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

export default class HistorialList extends React.Component<Props, any> {

    constructor(props) {
        super(props)
    }

    state = {
        list:[1,2,3,4,5,6,7]
    }

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

  render() {
    return (
      <S.Layout>
        <S.Header>
            <Icon name='menu' onPress={this.openMenu}/>
        </S.Header>

        <S.Title>Historial de compra</S.Title>

        <ScrollView>
            { this.state.list.map((item) => {
                return <HistorialTeaser key={item} />
            } )}
        </ScrollView>

      </S.Layout>
    )
  }
}

