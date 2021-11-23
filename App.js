
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
import Salads from "./src/screens/Salads";
import Drinks from "./src/screens/Drinks";
import Login from "./src/screens/Login";
//import ItemDetail from "./src/components/ItemDetail";
import InnerMenu from "./src/screens/InnerMenu";
import Wraps from "./src/screens/Wraps";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: Map,
    List: ListScreen,
    Plates: Plates,
    Cart: CartScreen,
    Menu: Menu,
    Appetizers: Appetizers,
    Salads: Salads,
    Drinks: Drinks,
    Login:Login,
    InnerMenu: InnerMenu,
    Wraps: Wraps,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
