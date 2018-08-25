import styled from "styled-components";
import { View } from 'react-native';


const S = {
    Layout: styled(View) `
        flex: 1;
        padding-top: 20px;
        background-color: #EAE9EF;
    `,
    Header: styled(View) `
      flex-direction: row;
      justify-content: space-between;
      background-color: #aa072a;
      padding: 10px;
    `,
    Card: styled(View)`
        flex-direction: row;
        padding: 10px;
        border-bottom-color: #aa072a;
        border-bottom-width: 1px;
    `,
    Image: styled(View)`
        flex: 2
    `,
    Content: styled(View)`
        flex: 6;
        padding-left: 10px;
    `,
    ViewMore: styled(View)`
        flex: 1;
        justify-content: center;
    `,
  };

export default S;