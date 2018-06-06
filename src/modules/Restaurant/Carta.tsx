import * as React from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import { Carousel } from 'nachos-ui';
import * as rne from 'react-native-elements';
import styled from "styled-components";
import { Routes } from '../../Routes';
import { NavigationScreenProp } from 'react-navigation';
import PlateTeaser from './CartaTeaser';
<<<<<<< HEAD
=======
import { CartaActions } from '../../store/actions/CartaActions';
const screen_width = Dimensions.get("window").width;


>>>>>>> origin

const screen_width = Dimensions.get("window").width;
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
        list: []
    }

    componentDidMount() {
        // If we don't need the list in other components 
        // we can only make the request and then Update the state with the list
        CartaActions.fetchCarta(123).then(list => this.setState({ list }))
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

        <View style={{width: screen_width, height: 100}}>
            <Carousel
                width={screen_width}
                height={200}
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

            { this.state.list.map((item: any) => <PlateTeaser key={item._id} data={item} /> )}

        </ScrollView>

      </S.Layout>
    )
  }
}

