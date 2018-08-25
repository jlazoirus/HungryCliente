import * as React from 'react';
import { Text } from 'react-native';
import S from './styles';
import { H4 } from 'nachos-ui';

const  PaymentCardText = ({expiration, label}) => {
    return (
      <S.Content>
        {<H4>{label}</H4>}
        <Text>{expiration}</Text>
      </S.Content>
    )
  }
export default PaymentCardText;