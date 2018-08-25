import * as React from 'react'
import { Text, View } from 'react-native'
import Layout from '../shared/Layout';
import { Routes } from '../../Routes';

import styled from 'styled-components';

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
            <Text>[icono de reloj]</Text>
            <Text>36 minutos</Text>
          </Wrapper>
      </Layout>
    )
  }
}