import * as React from 'react'
import { Text, View } from 'react-native'
import Layout from '../shared/Layout';
import { Routes } from '../../Routes';

import styled from 'styled-components';
import { Icon } from 'native-base';

const Wrapper = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  margin: 50px;
`;


export default class ETAScreen extends React.Component<any, any> {

  openDrawer = () => {
    this.props.navigation.navigate(Routes.CategoryList)

  }
  goCategories = () => {
    this.props.navigation.navigate(Routes.CategoryList)
  }
  
  render() {
    return (
      <Layout onPressLeft={this.openDrawer} onPressRight={this.goCategories}>
          <Wrapper>
            <HeaderText>Todo listo!</HeaderText>
            <Text>Tu Pedido fue confirmado y estara Listo en:</Text>
            <Icon name="time" style={{ fontSize: 150, marginTop: 30, marginBottom: 30, }}/>
            <Text style={{ fontSize: 20 }} >En 36 minutos, su orden estará lista</Text>
          </Wrapper>
      </Layout>
    )
  }
}