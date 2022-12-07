import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store"; //INDEXJS

export default function App() {

  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
}