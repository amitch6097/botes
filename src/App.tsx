import { Provider } from "react-redux";
import { browserHistory, Route, Router } from "react-router";
import { routerReducer, syncHistoryWithStore } from "react-router-redux";
import { combineReducers, createStore } from "redux";
import { Main } from "./pages/Main/Main";
import { MyBooks } from "./pages/MyBooks/MyBooks";
import "./styles.css";

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...{},
    routing: routerReducer
  })
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* Tell the Router to use our enhanced history */}
        <Router history={history}>
          <Route path="/" component={MyBooks}>
            <Route path="books" component={MyBooks} />
            <Route path="books/:bookId" component={Main} />
          </Route>
        </Router>
      </Provider>
    </div>
  );
}
