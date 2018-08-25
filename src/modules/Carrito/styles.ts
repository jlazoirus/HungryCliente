import { View } from 'react-native';
import styled from 'styled-components';

export const S = {
    Card: styled(View)`
      flex-direction: row;
      padding: 10px;
      border-bottom-color: #aa072a;
      border-bottom-width: 1px;
    `,
    Content: styled(View)`
      flex: 4;
      padding-left: 10px;
    `,
    ViewMore: styled(View)`
      flex: 3;
      justify-content: center;
    `,
    Layout: styled(View)`
      flex-direction: row;
      justify-content: space-between;
      `,
  };