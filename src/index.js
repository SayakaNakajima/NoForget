import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import reportWebVitals from './reportWebVitals'; -> 不要っぽい

// import { Provider } from "react-redux"; -> 不要？
// import thunk from "redux-thunk"; -> 不要？
// import { createStore, compose, applyMiddleware } from "redux"; -> 不要？

import App from "./components/App";

// const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore); -> 不要？
// const store = createStoreWithMiddleware(reducer); -> 不要？

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(); -> 不要っぽい
