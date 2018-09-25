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
        this.state = {
            id: this.props.navigation.state.params._id,
            totalAmount: this.props.navigation.state.params.amount,
            payMethod: this.props.navigation.state.params.payment,
            items: this.props.navigation.state.params.items,
            date: this.props.navigation.state.params.date
        }
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

        <S.Title>Compra #{this.state.id}</S.Title>

        <ScrollView>
          <Text>Fecha {this.state.date}</Text>
          <Text>Importe total {this.state.totalAmount}</Text>
          <Text>metodo de pago {this.state.payMethod}</Text>
          <Text>Descripcion del pedido</Text>
          {this.state.items.map((item) => {
                return <Text>{item.name},{item.price}</Text>
            })}
        </ScrollView>

      </S.Layout>
    )
  }
}

