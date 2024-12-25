import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      //initialRouteName='User' //если необходимо явно указать начальную страницу
      >
        <Drawer.Screen name='Welcome' component={WelcomeScreen} />
        <Drawer.Screen name='User' component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
