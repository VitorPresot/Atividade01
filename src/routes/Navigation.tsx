import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import Details from '../Details';
import styles from '../style';

const {Navigator, Screen} = createStackNavigator();

export function Navigation() {
  return (
    <Navigator screenOptions={{ headerShown:true }}>
      <Screen name="Home" component={Home} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}