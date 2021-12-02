
import { createAppContainer } from "react-navigation";
//import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import React, { useCallback } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Map from "./src/screens/Map";
// import ListScreen from "./src/screens/ListScreen";
//import ImageScreen from "./src/screens/Appetizers";
import CartScreen from "./src/screens/CartScreen";
import Menu from "./src/screens/Menu";
import Plates from "./src/screens/Plates";
import Appetizers from "./src/screens/Appetizers";
import Salads from "./src/screens/Salads";
import Drinks from "./src/screens/Drinks";
import Wraps from "./src/screens/Wraps";
import Login from "./src/screens/Login";
import CreateAccount from "./src/screens/CreateAccount";

import InnerMenuAppetizer from "./src/screens/InnerMenuAppetizer";
import InnerMenuPlate from "./src/screens/InnerMenuPlate";
import InnerMenuSalad from "./src/screens/InnerMenuSalad";
import InnerMenuDrink from "./src/screens/InnerMenuDrink";
import InnerMenuWrap from "./src/screens/InnerMenuWrap";

import { Provider as CartProvider } from "./src/context/CartContext";
import { Provider as AppetizerProvider } from "./src/context/AppetizerContext";
import { Provider as InnerMenuProvider } from "./src/context/InnerMenuContext";
import { Provider as PlatesProvider } from "./src/context/PlatesContext";
import { Provider as SaladsProvider } from "./src/context/SaladContext";
import { Provider as DrinksProvider } from "./src/context/DrinksContext";
import { Provider as WrapsProvider } from "./src/context/WrapsContext";


const navigator = createStackNavigator(
  {
    Login: Login,
    NewAccount: CreateAccount,
    Home: HomeScreen,
    Map: Map,
    Appetizers: Appetizers,
    Plates: Plates,
    Cart: CartScreen,
    Menu: Menu,
    Salads: Salads,
    Drinks: Drinks,
    Wraps: Wraps,

    InnerMenuAppetizer: InnerMenuAppetizer,
    InnerMenuPlate: InnerMenuPlate,
    InnerMenuSalad: InnerMenuSalad,
    InnerMenuDrink: InnerMenuDrink,
    InnerMenuWrap: InnerMenuWrap,

  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Kabob House Mobile",
    },
  }
);
const App = createAppContainer(navigator);

export default () => {
  return <CartProvider>
    <AppetizerProvider>
      <WrapsProvider>
        <SaladsProvider>
          <DrinksProvider>
            <PlatesProvider>
              <InnerMenuProvider>
                <App />
              </InnerMenuProvider>
            </PlatesProvider>
          </DrinksProvider>
        </SaladsProvider>
      </WrapsProvider>
    </AppetizerProvider>
  </CartProvider>

}