import * as React from "react";
import { Icon } from "native-base";
import * as rne from 'react-native-elements';
import { ScrollView, Text, Image, View, Dimensions, TouchableHighlight } from "react-native";
import { Carousel } from 'nachos-ui';
import styled from "styled-components"
import { NavigationScreenProp } from 'react-navigation';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { IStore } from '../../store/reducers/index';
import { CategoriesActions } from '../../store/actions/CategoriesActions';
import { Routes } from '../../Routes';

type Props = {
  navigation: NavigationScreenProp<any>;
  actions: {
    getCategories: () => {}
  },
  categories: any
};

type State = {
};

const screen_width = Dimensions.get("window").width;

const S = {
  Layout: styled(View) `
      flex: 1;
      padding-top: 20px;
      background-color: #EAE9EF;
  `,
  Header: styled(View) `
      flex-direction: row;
      justify-content: space-between;
      background-color: #aa072a;
      padding: 10px;
  `,
  Title: styled(Text) `
      font-size: 20px;
      padding: 10px;
  `,
  Options: styled(View) `
      flex-direction: row;
      flex-wrap: wrap;
      align-content: flex-start;
  `,
  Image: styled(Image) `
    width: 100%;
    height: 100%;
    border-radius: 25px;
  `,
  View: styled(View) `
    align-items: center;
    flex-direction: row;
    background-color: #aa072a;
    flex:1;
  `,
  Item: styled(View) `
    width: ${(screen_width / 4) - 10}px;
    height: 75px;
    align-items: center;
    margin: 10px 5px 20px;
  `,

}
class CategoryList extends React.Component<Props, State> {

  state = {
  };

  componentDidMount () {
    // To use the list from the Store
    // We need to add a
    // (1) Create a Fetch Action into the action file
    // (2) add it in mapDispatchToProps
    // (3) add the new prop in mapStateToProps
    // (4) Add into connect()()
    // (5) Use the list form props
    this.props.actions.getCategories();
  }

  someMethod() {

  }
  openMenu = () => {
    this.props.navigation.openDrawer();
  }
  goToRestaurants = () => {
    this.props.navigation.navigate(Routes.RestaurantList);
  }

  render() {
    return (
      <S.Layout>
        <S.Header>
          <Icon name='menu' onPress={this.openMenu} />
          <Text style={{ fontSize: 30 }}>Categorías</Text>
          <Icon name='cart' active />
        </S.Header>
        <ScrollView>
          <S.View style={{ width: screen_width, height: 200 }}>
              <S.Image 
                  style={{height: 150}} 
                  source={require('../../../assets/images/hungrylogo.png')} 
              />
          </S.View>
          <rne.SearchBar
            lightTheme
            round
            onChangeText={this.someMethod}
            onClearText={this.someMethod}
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Que te provoca come hoy?' />

          <S.Options>
            {
              _.map(this.props.categories, (category) => {
                return <TouchableHighlight onPress= {this.goToRestaurants} >
                <S.Item key={category._id}>
                <S.Image source={{ uri: category.imgUrl }}></S.Image>
                <Text >{category.name}</Text>
              </S.Item>
              </TouchableHighlight>
              })
            }
          </S.Options>
        </ScrollView>
      </S.Layout>
    );
  }
}


const mapStateToProps = (state: IStore, ownProps) => ({
  categories: state.categories
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    getCategories: () => dispatch(CategoriesActions.getAll(''))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

