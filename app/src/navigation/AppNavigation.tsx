import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

export const AppNavigation: React.FC = () => {
  const { Group, Screen, Navigator } = createStackNavigator();

  return (
    <Navigator>
      <Group
        screenOptions={{ headerShown: false, cardStyle: { paddingTop: 50 } }}
      >
        <Screen name={"home"} component={Home} />
      </Group>
    </Navigator>
  );
};
