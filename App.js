import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        //initialRouteName='User' //если необходимо явно указать начальную страницу
        screenOptions={{
          //стилизация для всех страниц
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          drawerStyle: {
            backgroundColor: '#ccc',
          },
        }}
      >
        <Drawer.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            //стилизация персонально для страницы Welcome
            headerStyle: { backgroundColor: '#3c0a6b' },
            headerTintColor: 'white',
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name='User'
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons size={size} name='person' />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
