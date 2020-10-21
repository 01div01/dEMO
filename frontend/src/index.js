import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer";
import { BrowserRouter } from "react-router-dom";

const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  return store;
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={configureStore({})}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
// import './index.css';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// import App from './App';

// import Create from './components/admin/create';
// import Edit from './components/admin/edit';
// import Delete from './components/admin/delete';

// const routing = (
// 	<Router>
// 		<React.StrictMode>
		
// 			<Switch>
// 				<Route exact path="/" component={App} />
			
// 				<Route exact path="/admin/create" component={Create} />
// 				<Route exact path="/admin/edit/:id" component={Edit} />
// 				<Route exact path="/admin/delete/:id" component={Delete} />
// 			</Switch>
		
// 		</React.StrictMode>
// 	</Router>
// );

// ReactDOM.render(routing, document.getElementById('root'));