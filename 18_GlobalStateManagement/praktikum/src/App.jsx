import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CreateProduct from './CreateProduct';
import ListProduct from './ListProduct';

export default function App() {
  return (
    // Provider membungkus seluruh aplikasi dengan store Redux
    <Provider store={store}>
      <div className="container mt-4">
        <h1 className="text-center">Product Management</h1>
        <CreateProduct />
        <ListProduct />
      </div>
    </Provider>
  );
}
