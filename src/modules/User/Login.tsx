import * as React from "react";
import { Container, Header, Content, Text, Form, Item, Label, Input, Button, Spinner } from "native-base";
import * as rn from "react-native";
import * as rne from "react-native-elements";

import * as na from "nachos-ui";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";
import { IStore } from "../../store/reducers/index";
import { actionUserFetch } from "../../store/actions/userActions";
import styled from "styled-components";
import { Routes } from '../../Routes';

// https://avocode.com/nachos-ui/docs/#!/Showcase/Spinner
// https://react-native-training.github.io/react-native-elements/docs/0.19.0/button.html

const screen_width = rn.Dimensions.get("window").width;

const SectionImage = styled(rn.View)`
  align-items: center;
  margin-top: 50px;
`;

const RecoverPassword = styled(rn.Button)`
  text-decoration: underline;
`;

const ButtonLogin = styled(Button)`
  align-items: center;
`;

const ButtonCrearCuenta = styled(rn.Button)`
  align-self: center;
  text-decoration: underline;
`;

const mapsStateToProps = (state: IStore) => {
  return {
    isLoading: state.callInProgress > 0,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      loginUser: payload => dispatch(actionUserFetch(payload))
    }
  };
};

type Props = {
  actions: any;
  navigation: NavigationScreenProp<any>;
  isLoading: boolean;
  user: any;
};

type State = {
  email: string;
  password: string;
};

class Login extends React.PureComponent<Props, State> {
  state = {
    email: "test@test.com",
    password: "Qwerty"
  };

  login = () => {
    this.props.actions.loginUser({
      email: this.state.email,
      password: this.state.password
    });
  };

  goToRegister = () => {
    this.props.navigation.navigate(Routes.Register);
  };

  goToRecoveryPassword = () => {
    //
  };

  componentDidUpdate() {
    if (this.props.user) {
      this.props.navigation.navigate(Routes.main);
    }
  }

  render() {
    return (
      <Container style={{ alignItems: "center" }}>
        <Content style={{ backgroundColor: "#aa072a", width: screen_width }}>
          <SectionImage>
            <rn.Image
              style={{ width: 240, height: 150 }}
              source={require("../../../assets/images/hungrylogo.png")}
            />
          </SectionImage>
          <rn.View style={{ margin: 40 }}>
            <Item regular style={{ margin: 20 }}>
              <Input
                style={{ color: "white", fontWeight: "bold" }}
                placeholder="User"
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item regular last style={{ margin: 20 }}>
              <Input
                style={{ color: "white", fontWeight: "bold" }}
                placeholder="Password"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <RecoverPassword
              title="Recuperar Password"
              color="white"
              onPress={this.goToRecoveryPassword}
            />
          </rn.View>

          <rn.View style={{ paddingLeft: 80, paddingRight: 80 }}>
            <na.Button kind="squared" onPress={this.login}>
              Ingresar
            </na.Button>
          </rn.View>

          <rn.View style={{ marginTop: 50 }}>
            <na.A
              style={{ fontSize: 20, textAlign: "center" }}
              onPress={this.goToRegister}
            >
              Crear cuenta con email
            </na.A>
          </rn.View>

          <rn.View style={{ alignItems: "center" }}>
            {this.props.isLoading && <na.Spinner />}
          </rn.View>
        </Content>
      </Container>
    );
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(Login);
