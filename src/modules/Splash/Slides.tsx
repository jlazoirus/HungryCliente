import * as React from "react";
import { ScrollView, View, Text, Dimensions, Button, Image } from "react-native";
import styled from 'styled-components';
const SCREEN_WIDTH = Dimensions.get('window').width;

const Slide = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: ${SCREEN_WIDTH};
    background-color: #aa072a;
`;

const SlideText = styled(Text)`
    font-size: 30px;
`;

class Slides extends React.Component<Props, State> {

    constructor(props) {
        super(props);
    }

    state = {
    };

    skipSplashScreen = () => {
      this.props.onComplete();
    }
    

  render() {
      return (
        <ScrollView horizontal pagingEnabled style={{flex: 1}}>
            { this.props.data && this.props.data.map((slide, index) => (
                    <Slide key={slide.text}>
                        <Image 
                            style={{width: 240, height: 150}} 
                            source={require('../../../assets/images/hungrylogo.png')} 
                        /> 
                        <Button
                            color="white"
                            title={'Comencemos!'} 
                            onPress={this.skipSplashScreen} /> 
                    </Slide>
                )
            )}
        </ScrollView>
      );
  }
}

export default Slides;

type Props = {
    data: any[],
    onComplete: Function
};

type State = {
};
