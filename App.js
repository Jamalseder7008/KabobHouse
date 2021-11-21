
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Map from "./src/screens/Map";
import ListScreen from "./src/screens/ListScreen";
//import ImageScreen from "./src/screens/Appetizers";
import CartScreen from "./src/screens/CartScreen";
import Menu from "./src/screens/Menu";
import Plates from "./src/screens/Plates";
import Appetizers from "./src/screens/Appetizers";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: Map,
    List: ListScreen,
    Plates: Plates,
    Cart: CartScreen,
    Menu: Menu,
    Appetizers: Appetizers,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
