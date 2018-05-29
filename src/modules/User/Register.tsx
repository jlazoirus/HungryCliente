import * as React from "react";
import { connect } from "react-redux";
import { IStore } from '../../store/reducers/index';
import { NavigationScreenProp } from "react-navigation";
import { View, Text } from 'react-native';
import { Icon, Input, Item, Content } from "native-base";
import { Avatar } from "react-native-elements";
import { Checkbox, Button } from 'nachos-ui';
import { Routes } from '../../Routes';

type Props = {
    actions: any,
    isLoading: boolean,
    navigation: NavigationScreenProp<any>,
    user: any
};

type State = {
};

class Register extends React.Component<Props, State> {

  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    termAndConditions: false,
  };

  goToLogin = () => {
    this.props.navigation.goBack()
  }

  registerUser = () => {
    
  }

  handleCheckbox = () => {

  }

  componentDidUpdate () {
    if (this.props.user) {
      this.props.navigation.navigate(Routes.main);
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#aa072a', flex: 1, padding: 20}}>
        <Content>
        <Icon name='close-circle' active onPress={this.goToLogin} />
        <View style={{ flex: 1, alignItems: 'center', marginTop: 20, marginLeft: 40, marginRight: 40 }}>
          <Avatar
            width={200}
            icon={{name: 'person'}}
            onPress={() => console.log("Works!")}
          />
          <Item regular style={{ marginTop: 40}}>
            <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Nombre"
                  placeholderTextColor='white'
                  onChangeText={name => this.setState({ name })}
                  value={this.state.name}
            />
          </Item>
          <Item regular style={{ marginTop: 10}}>
            <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Apellido"
                  placeholderTextColor='white'
                  onChangeText={lastName => this.setState({ lastName })}
                  value={this.state.lastName}
            />
          </Item>
          <Item regular style={{ marginTop: 10}}>
            <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Email"
                  placeholderTextColor='white'
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
            />
          </Item>
          <Item regular style={{ marginTop: 10}}>
            <Input
                  style={{ color: "white", fontWeight: "bold" }}
                  placeholder="Contraseña"
                  placeholderTextColor='white'
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
            />
          </Item>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
            <Checkbox
              checked={this.state.termAndConditions}
              onValueChange={ termAndConditions => this.setState({ termAndConditions })}
            />
            <Text style={{ color: 'white', paddingLeft: 10 }}> Acepto terminos y condiciones</Text>
          </View>

          <View style={{ marginTop: 20, alignSelf: 'stretch', }}>
            <Button disabled={!this.state.termAndConditions} style={{ }} kind="squared" onPress={this.registerUser}>
              Crear Cuenta
            </Button>
          </View>
          
        </View>
        </Content>
      </View>
    );
  }
}

const mapsStateToProps = (state: IStore) => {
  return {
    isLoading: state.callInProgress > 0,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
    }
  }
};

export default connect(mapsStateToProps, mapDispatchToProps)(Register);
