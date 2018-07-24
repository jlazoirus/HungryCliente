import * as React from 'react'
import { Text, View } from 'react-native'
import Layout from '../shared/Layout';
import { NavigationScreenProp } from 'react-navigation';
import { Routes } from '../../Routes';


type Props = {
  navigation: NavigationScreenProp<any>;
  carrito: any[];
  total: any;
  items: any;
  actions: any;
}

export default class ETAScreen extends React.Component<Props, any> {

  openDrawer = () => {
    // this.props.navigation.openDrawer();
    this.props.navigation.navigate(Routes.CategoryList)

  }
  goCategories = () => {
    this.props.navigation.navigate(Routes.CategoryList)
  }
  
  render() {
    return (
      <Layout onPressLeft={this.openDrawer} onPressRight={this.goCategories}>
          <Text>Tu tiempo estimado de espera es ... </Text>
      </Layout>
    )
  }
}