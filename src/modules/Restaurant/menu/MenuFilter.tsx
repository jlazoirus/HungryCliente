import * as React from "react";
import { View, Text } from "react-native";
import * as rne from "react-native-elements";
import styled from 'styled-components';

const S = {
    Options: styled(View)`
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 10px;
    `,
    Text: styled(Text)`
      text-align: center;
    `
};

const filters = [
    { label: "Para Llevar", icon: "bicycle" },
    { label: "Reservar", icon: "calendar" },
    { label: "Delivery", icon: "paper-plane" }
  ];

  export const MenuFilter = ({ currentFilter, onSelectFilter }) => {
    return (
      <S.Options>
        {filters.map(({ label, icon }) => (
          <FilterItem
            key={icon}
            label={label}
            active={currentFilter === label}
            icon={icon}
            onPress={() => onSelectFilter(label)}
          />
        ))}
      </S.Options>
    );
  };

  const FilterItem = ({ label, icon, active, onPress }) => {
    return (
      <View>
        <rne.Icon
          raised
          name={icon}
          reverse={active}
          type="font-awesome"
          color="#aa072a"
          onPress={onPress}
        />
        <S.Text>{label}</S.Text>
      </View>
    );
  };