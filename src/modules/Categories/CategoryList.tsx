import * as React from "react";
import { Container, Header, Content, Text } from "native-base";
import { connect } from "react-redux";

type Props = {
    actions: any
};

type State = {
};

class CategoryList extends React.Component<Props, State> {

  state = {
  };


  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text>Hello CategoryList</Text>
        </Content>
      </Container>
    );
  }
}


export default CategoryList;
