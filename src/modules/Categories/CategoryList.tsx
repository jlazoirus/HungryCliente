import * as React from "react";
import { View, Icon } from "native-base";
import * as rne from 'react-native-elements';
import { ScrollView, Text, Image } from "react-native";
import styled from "styled-components"

type Props = {
    actions: any
};

type State = {
};

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
  Image: styled(View)`
        flex: 3;
        border-radius: 25px;
    `,
  View: styled(View)`
    align-items: center;
  `,

}
class CategoryList extends React.Component<Props, State> {

  state = {
  };
  someMethod(){

  }

  render() {
    return (
      <S.Layout>
        <S.Header>
            <Icon name='arrow-back' active onPress={this.onPressArrowBack}/>
            <Text style={{fontSize:30}}>Categorías</Text>
            <Icon name='cart' active />
        </S.Header>
        <rne.SearchBar
          lightTheme
          round
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder='Type Here...' />
        <ScrollView>
            <S.Options>
                <S.View>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "https://prod.media.larepublica.pe/720x405/larepublica/imagen/2017/07/15/noticia-pollo-noticia-837176.jpg" }}
                    />
                  </S.Image>
                  <Text >Menú</Text>
                </S.View>
                <S.View>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "https://www.cocacoladeperu.com.pe/content/dam/journey/pe/es/private/historias/producto/ChifaIncaKola.jpg" }}
                    />
                  </S.Image>
                    <Text>Chifa</Text>
                </S.View>
                <S.View>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "http://plusempresarial.com/wp-content/uploads/2016/03/cevicher%C3%ADa-1.jpg" }}
                    />
                  </S.Image>

                    <Text>Cevichería</Text>
                </S.View>
            </S.Options>
            <S.Options>
                <View style={{alignItems:'center'}}>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "http://omammamia.com/traditional/wp-content/uploads/2016/06/248ca95a9c0ba8d502dc21107bac7652.jpg" }}
                    />
                  </S.Image>
                  <Text>Italiana</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "https://www.sportsunlimited.es/wp-content/uploads/2016/06/plato-de-autor.jpg" }}
                    />
                  </S.Image>
                    <Text>Autor</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "https://img.peru21.pe/files/article_content_ec_fotos/uploads/2017/08/08/598993cd0fc2c.jpeg" }}
                    />
                  </S.Image>

                    <Text>Al Paso</Text>
                </View>
            </S.Options>
            <S.Options>
            <View style={{alignItems:'center'}}>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/03/cafe.jpg" }}
                    />
                  </S.Image>
                  <Text>Cafes</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "http://www.icoev.es/wp-content/uploads/2015/03/Mesa-comida-empresa.jpg" }}
                    />
                  </S.Image>
                    <Text>Reservar</Text>
                </View>
                <View style={{alignItems:'center'}}>
                  <S.Image>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 50 }}
                      source={{ uri: "http://plusempresarial.com/wp-content/uploads/2016/06/negocio-de-men%C3%BA-delivery.jpg" }}
                    />
                  </S.Image>

                    <Text>Delivery</Text>
                </View>
            </S.Options>

        </ScrollView>
      </S.Layout>
    );
  }
}


export default CategoryList;
