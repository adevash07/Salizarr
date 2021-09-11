import Home from "./views/home/home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Footer, Header } from "components/index";
import Menu from "views/menu/Menu";
import { menuDishes } from "data/pizza";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/menu'
          render={(props) => <Menu {...props} menuDishes={menuDishes} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
