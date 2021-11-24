
import { createAppContainer } from "react-navigation";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import React, { useState } from "react";
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
import InnerMenuAppetizer from "./src/screens/InnerMenuAppetizer";
import Wraps from "./src/screens/Wraps";
import { Provider as CartProvider} from "./src/context/CartContext";
import { Provider as AppetizerProvider } from "./src/context/AppetizerContext";
import { Provider as InnerMenuProvider} from "./src/context/InnerMenuContext";
import { Provider as PlatesProvider} from "./src/context/PlatesContext";
import { Provider as SaladsProvider} from "./src/context/SaladContext";
import { Provider as DrinksProvider} from "./src/context/DrinksContext";
import { Provider as WrapsProvider} from "./src/context/WrapsContext";
import InnerMenuPlate from "./src/screens/InnerMenuPlate";
import InnerMenuSalad from "./src/screens/InnerMenuSalad";
import InnerMenuDrink from "./src/screens/InnerMenuDrink";
import InnerMenuWrap from "./src/screens/InnerMenuWrap";

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
    InnerMenuAppetizer: InnerMenuAppetizer,
    InnerMenuPlate: InnerMenuPlate,
    InnerMenuSalad: InnerMenuSalad,
    InnerMenuDrink: InnerMenuDrink,
    InnerMenuWrap: InnerMenuWrap,
    Wraps: Wraps
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