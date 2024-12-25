import { View, Text, Button, StyleSheet } from 'react-native';

//компоненты, зарегистрированные в <Drawer.Navigator> см.файл App.js
//автоматические принимают route, navigation в качестве входящих параметров
function UserScreen({ route, navigation }) {
  //способ вызвать меню с помощью кнопки на странице
  function openDrawerHandler() {
    //если в момент нажатия он уже открыт, то закроется
    //если в момент нажатия закрыт, то откроется
    navigation.toggleDrawer();
  }
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title='Open Drawer' onPress={openDrawerHandler} />
    </View>
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
