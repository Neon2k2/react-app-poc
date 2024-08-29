import React, { useState } from 'react';
import './App.css';
import './main.scss';
import './_variable.scss';
import Login from './Components/Login';
import AboutUs from "./Components/About";
import ProductDetails from "./Components/Productdetails";
import ProductList from "./Components/Productlist";
import ContactUs from "./Components/Contact";
import CreateProductForm from './Components/CreateProductForm';
import { ProductProvider } from './Components/productsContext';
import {Routes , Route } from "react-router-dom" 
import Main from './Components/Main';
import ProductTableView from './Components/ProductTableView';
import ProductTableList from './Components/ProductTableList';
import ParentComponent from './Components/ParentComponent';
import ChildComponent from './Components/ChildComponent';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Routes>
            <Route path="/" element={<Main><Login /></Main>} />
            <Route path="/product" element={ <Main><ProductList/></Main> } />
            <Route path="/product/:id" element={ <Main><ProductDetails/></Main> } />
            <Route path="/about" element={ <Main><AboutUs/></Main> } />
            <Route path="/contactus" element={ <Main><ContactUs/></Main> } />
            <Route path="/createproductform" element={<Main><CreateProductForm /></Main>} />
            <Route path="/producttableview" element={<Main><ProductTableView /></Main>} />
            <Route path="/producttablematerial" element={<Main><ProductTableList /></Main>} />
            <Route path='/parentComponent' element={<Main><ParentComponent /></Main>} />
            <Route path='/childComponent' element={<Main><ChildComponent /></Main>} />
        </Routes>
      </ProductProvider>
      <a className="App-link" href="https://reactjs.org" target="_blank">
        learn react
      </a>
      {/* <div>
        {
            status? <h1>Hello World</h1>:null
        }
        <button onClick={setStatus(false)}>Hide</button>
        <button onClick={setStatus(true)}>Show</button>
      </div> */}
    </div>
  );
}

export default App;