import * as React from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Icon} from 'native-base';
import { Carousel } from 'nachos-ui';
import * as rne from 'react-native-elements';
import styled from "styled-components";
import { Routes } from '../../Routes';
import { NavigationScreenProp } from 'react-navigation';
import Plate from './CartaTeaser';
import { CartaActions } from '../../store/actions/CartaActions';

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

    list: any[] = [];

    state = {
        filter: null,
        displayedList: []
    }


    async componentDidMount() {
       this.list = await CartaActions.fetchCarta(123);
       this.setState({displayedList: this.list})
    }

    onPressArrowBack = () => {
        this.props.navigation.goBack();
    }

    onPressCart = () => {
        this.props.navigation.navigate(Routes.Carrito);
    }

    updateFilter = (filter) => {
        const displayedList = this.list.filter( item => (item as any).deliveryType.indexOf(filter) > -1 )
        this.setState({displayedList, filter})
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

        <S.Title>Mama Raquel</S.Title>
        <ScrollView>
            <MenuFilter currentFilter={this.state.filter} onSelectFilter={this.updateFilter} />
            { this.state.displayedList.map((item: any) => (
                <Plate key={item._id} data={item} onPress={this.onPressCart} />
            ))}
        </ScrollView>
      </S.Layout>
    )
  }
}

const filters = [
    { label: 'Para Llevar', icon: 'bicycle'},
    { label: 'Reservar', icon: 'calendar'},
    { label: 'Delivery', icon: 'paper-plane'},
];

const MenuFilter = ({ currentFilter, onSelectFilter }) => {
  
    return (
        <S.Options>
            { filters.map( ({label, icon }) => (
                <FilterItem key={icon}
                    label={label} 
                    active={currentFilter === label} 
                    icon={icon} 
                    onPress={() => onSelectFilter(label)}
                />
            ))}
        </S.Options>
    )
}


const FilterItem = ({ label, icon , active, onPress }) => {
    return (
        <View>
            <rne.Icon raised 
                    name={icon} 
                    reverse={active} 
                    type='font-awesome' 
                    color='#aa072a' 
                    onPress={onPress} />
            <Text>{ label }</Text>
        </View>
    )
}