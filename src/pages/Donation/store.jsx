// store.js

import { createStore } from 'redux';
import rootReducer from '../reducers'; // Import your root reducer

const store = createStore(rootReducer); // Create your Redux store

export default store;
