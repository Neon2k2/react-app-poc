import React from 'react'
import { MapDispatchToProps, mapStateToProps } from 'react-redux';

export default function Cart({ count, increment, decrement}) {
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = {
    increment,
    decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


// action.js start
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = ()=> (
    {
        type: INCREMENT
    }
);

export const decremet = ()=> (
    {
        type: DECREMENT
    }
);

// action.js end

// reducers.js start
import {INCREMENT,DECREMENT} from './action';

const initialState = {
    count = 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
            default:
                return state;
    }
};

export default counterReducer;
// reducers.js end

// store.js start
import { applyMiddleware, compose, createStore } from "redux";
import {thunk} from 'redux-thunk';
import counterReducer from "./reducers";

const enhancer = compose(applyMiddleware(thunk));

export const store = createStore(counterReducer, enhancer);


// store.js end

// index.js start
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
