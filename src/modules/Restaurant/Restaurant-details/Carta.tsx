import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components";
import { NavigationScreenProp } from "react-navigation";
import Plate from "./CartaTeaser";
import { CartaActions } from "../../../store/actions/CartaActions";
import { Gallery } from "../../shared/Gallery";
import Layout from "../../shared/Layout";
import { connect } from 'react-redux';
import { CarritoActions } from '../../../store/actions/CarritoActions';
import { MenuFilter } from '../menu/MenuFilter';
import { Routes } from '../../../Routes';

const S = {
  Title: styled(Text)`
    font-size: 20px;
    padding: 10px;
  `,
  Options: styled(View)`
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
  `
};

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    [key: string]: Function
  }
};

class Carta extends React.Component<Props, any> {


  constructor(props) {
    super(props);
  }

  list: any[] = [];

  state = {
    filter: null,
    displayedList: [],
    name: 'Mama Raquel'
  };

  async componentDidMount() {
    this.list = await CartaActions.fetchCarta(123);
    this.setState({ displayedList: this.list });
  }

  onPressArrowBack = () => {
    this.props.navigation.goBack();
  };

  addToCheckout = (item) => {
    this.props.actions.addToCheckout(item);
    this.goToCheckout();
  }

  goToCheckout = () => {
    this.props.navigation.navigate(Routes.Carrito);
  };

  updateFilter = filter => {
    const displayedList = this.list.filter(
      item => (item as any).deliveryType.indexOf(filter) > -1
    );
    this.setState({ displayedList, filter });
  };

  render() {
    return (
        <Layout
            iconLeft="arrow-back"
            iconRight="cart"
            onPressLeft={this.onPressArrowBack}
            onPressRight={this.goToCheckout} >

            <Gallery />

            <S.Title>{this.state.name}</S.Title>
            
            <ScrollView>
                <MenuFilter currentFilter={this.state.filter} onSelectFilter={this.updateFilter} />
                
                {this.state.displayedList.map((item: any) => (
                    <Plate  key={item._id}  data={item}  onSelect={this.addToCheckout}  />
                ))}
            </ScrollView>

        </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    addToCheckout: (item) => dispatch(CarritoActions.addToCarrito(item))
  }
})

export default connect(null, mapDispatchToProps)(Carta);


