import * as React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import styled from 'styled-components';
import { NavigationScreenProp } from 'react-navigation';

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

    state = {}

    openMenu = () => {
        this.props.navigation.openDrawer();
    }

  render() {
    return (
      <S.Layout>
        <S.Header>
            <Icon name='menu' onPress={this.openMenu}/>
        </S.Header>

        <S.Title>Compra #02883923</S.Title>

        <ScrollView>
          <Text>Fecha</Text>
          <Text>Importe total</Text>
          <Text>metodo de pago</Text>
          <Text>Descripcion del pedido</Text>
          <Text>item1</Text>
          <Text>precio1</Text>
          <Text>item2</Text>
          <Text>precio2</Text>
          <Text>item3</Text>
          <Text>precio3</Text>
        </ScrollView>

      </S.Layout>
    )
  }
}

