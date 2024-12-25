import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SubUserScreen from './UserProfile';
import UserProfile from './UserProfile';
import UserOrders from './UserOrders';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator({
  options: {},
});

//компоненты, зарегистрированные в <Drawer.Navigator> см.файл App.js
//автоматические принимают route, navigation в качестве входящих параметров
function UserScreen({ route, navigation }) {
  //способ вызвать меню с помощью кнопки на странице
  // function openDrawerHandler() {
  //   //если в момент нажатия он уже открыт, то закроется
  //   //если в момент нажатия закрыт, то откроется
  //   navigation.toggleDrawer();
  // }
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false, // Скрыть верхнюю шапку
        headerTintColor: '#3c0a6b',
        tabBarActiveTintColor: '#3c0a6b',
      }}
    >
      <BottomTab.Screen
        name='UserProfile'
        component={UserProfile}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name='person' size={size} />,
        }}
      />
      <BottomTab.Screen
        name='UserOrders'
        component={UserOrders}
        options={{
          tabBarIcon: ({ size }) => <Ionicons name='list' size={size} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
