
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Map from "./src/screens/Map";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CartScreen from "./src/screens/CartScreen";
import Menu from "./src/screens/Menu";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: Map,
    List: ListScreen,
    Image: ImageScreen,
    Cart: CartScreen,
    Menu: Menu,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
