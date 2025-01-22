import './App.css';
import Body from "./components/Body.jsx";
import appStore from "./utils/appStore.jsx";
import { Provider } from "react-redux";


const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  )
}

export default App;
